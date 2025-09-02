import { loadAnalytics } from './analytics.mjs';
import { trackSearchResults } from './search-tracking.mjs';
import { getConsentCookie, isValidConsentCookie } from './cookie-functions.mjs'
import CookieBanner from './cookie-banner.mjs';
import CookiesPage from './cookies-page.mjs';
import { createAll } from 'govuk-frontend';

// Timer that allows us to only fire events after a user has finished typing
let inputDebounceTimer = null

const initialiseAnalytics = () => {
  // Check for consent before initialising analytics
  const userConsent = getConsentCookie()

  if (userConsent && isValidConsentCookie(userConsent) && userConsent.analytics) {
    loadAnalytics()

    // We want to wait a bit before firing events to indicate that
    // someone is looking at a result and not that it's come up in passing.
    const DEBOUNCE_TIME_TO_WAIT = () => {
      // We want to be able to reduce this timeout in order to make sure
      // our tests do not run very slowly.
      // @ts-expect-error Property does not exist on window
      const timeout = window.__SITE_SEARCH_TRACKING_TIMEOUT
      return typeof timeout !== 'undefined' ? timeout : 200 // milliseconds
    }

    document.querySelector('site-search').addEventListener('change', (e) => {
      const searchTerm = e.target.value;

      clearTimeout(inputDebounceTimer)

      inputDebounceTimer = setTimeout(() => {
        const searchResultsContainer = document.querySelector('#app-site-search__input__listbox');
        const searchResults = searchResultsContainer && searchResultsContainer.querySelectorAll('li')

        if (searchResults && searchResults.length) {
          const searchResultsList = Array.from(searchResults).map((searchResult, index) => ({
            title: searchResult.innerText,
            category: 'navbar search', // don't know what they want here
            list: searchTerm,
            position: index + 1,
          }))

          trackSearchResults(searchTerm, searchResults)  
        }
      }, DEBOUNCE_TIME_TO_WAIT())
    })
  }
}
