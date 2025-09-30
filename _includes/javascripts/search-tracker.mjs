import { Component } from 'govuk-frontend'
import { cookiesAccepted, addToDataLayer, stripPossiblePII } from './analytics.mjs'
import Schemas from './schemas.mjs'

class SearchTracker extends Component {
  static checkSupport() {
    super.checkSupport()

    if (!cookiesAccepted()) {
      throw Error('Cancelled initialisation as cookies not accepted')
    }
  }

  static moduleName = 'search-tracker'

  constructor($root) {
    super($root)

    this.siteSearch = this.$root.querySelector('site-search')

    this.inputDebounceTimer = null
    this.siteSearch.addEventListener("input", this.trackSearch.bind(this))
    this.siteSearch.addEventListener("click", this.trackConfirm.bind(this))
  }

  formatResults (item_list_name, results) {
    return results.map((searchResult, index) => ({
      item_name: searchResult.childNodes[0].nodeValue,
      item_list_name,
      index: `${index}`,
    }))
  }

  // based on the search tracking from alphagov#govuk-design-system
  // https://github.com/alphagov/govuk-design-system/blob/main/src/javascripts/components/search.tracking.mjs
  trackSearch({ target }) {
    const searchTerm = target.value
    clearTimeout(this.inputDebounceTimer)

    this.inputDebounceTimer = setTimeout(() => {
      const searchResults = this.siteSearch.querySelectorAll('#app-site-search__input__listbox li');

      addToDataLayer({
        event: "event_data",
        event_data: {
          action: "search",
          event_name: "search",
          text: searchTerm,
          url: window.location.pathname,
        }
      })

      this.trackSearchInteraction(searchTerm, this.formatResults(searchTerm, [...searchResults]))
    }, 500)
  }

  // based on the search tracking from alphagov#govuk-design-system
  // https://github.com/alphagov/govuk-design-system/blob/main/src/javascripts/components/search.tracking.mjs
  trackConfirm({ target }) {
    if (target.closest(".app-site-search__option")) {
      const searchTerm = this.siteSearch.querySelector('input').value
      const searchResults = this.siteSearch.querySelectorAll('#app-site-search__input__listbox li')
      this.trackSearchInteraction(searchTerm, this.formatResults(searchTerm, [...searchResults]), target.childNodes[0].nodeValue)
    }
  }

  // based on the search tracking from alphagov#govuk-design-system
  // https://github.com/alphagov/govuk-design-system/blob/main/src/javascripts/components/search.tracking.mjs
  trackSearchInteraction(searchTerm, searchResults, clickedItem) {
    if ('DO_NOT_TRACK_ENABLED' in window && window.DO_NOT_TRACK_ENABLED) {
      return
    }

    const items = clickedItem ? [searchResults.find(({ item_name }) => clickedItem == item_name)] : searchResults

    const event = Schemas.mergeProperties({
      event_name: clickedItem ? 'select_item' : 'view_item_list',
      results: searchResults.length,
      term: stripPossiblePII(searchTerm),
      ecommerce: { items }
    }, 'search_results', Schemas.ecommerceSchema)

    addToDataLayer({ search_results: { ecommerce: null } })
    addToDataLayer(event)
  }
}

export default SearchTracker
