// https://github.com/alphagov/govuk_publishing_components/blob/main/app/assets/javascripts/govuk_publishing_components/analytics-ga4/ga4-page-views.js
// to get the same page view tracking as used on GOV.UK, sadly not an importable
// module so need to hardcode this copy-and-paste (and update it if changes) :(
import { Component } from 'govuk-frontend'
import { cookiesAccepted, addToDataLayer, stripPossiblePII } from './analytics.mjs'

class PageViewTracker extends Component {
  static moduleName = 'page-view-tracker'

  static checkSupport() {
    super.checkSupport()

    if (!cookiesAccepted()) {
      throw Error('Cancelled initialisation as cookies not accepted')
    }
  }

  constructor($root) {
    super($root) 

    const event = {
      event: 'page_view',
      page_view: {
        location: this.getLocation(),
        /* If the init() function receives a referrer parameter, this indicates that it has been called as a part of an AJAX request and
        this.getReferrer() will not return the correct value. Therefore we need to rely on the referrer parameter. */
        title: this.getTitle(),
        status_code: this.getStatusCode(),
        viewport_size: this.getViewPort(),
        rendering_app: this.getMetaContent('rendering-app'),
        language: this.getLanguage(),
      }
    }

    addToDataLayer(event)
  }

  getBasePath () {
    return this.getMetaContent('ga4-base-path')
  }

  getCanonicalHref () {
    var link = document.querySelector('link[rel=canonical]')

    if (link) {
      return link.href
    }

    var basePath = this.getBasePath()

    if (basePath) {
      return window.location.origin + basePath // e.g. https://www.gov.uk + /browse
    }
  }

  getLocation () {
    // We don't want to remove dates on search pages.
    return stripPossiblePII(this.stripGaParam(document.location.href))
  }

  getQueryString () {
    var queryString = window.GOVUK.analyticsGa4.core.trackFunctions.getSearch()
    if (queryString) {
      // We don't want to remove dates on search pages.
      queryString = this.stripGaParam(queryString)
      queryString = stripPossiblePII(queryString)
      queryString = queryString.substring(1) // removes the '?' character from the start.
      return queryString
    }
  }

  // remove GA parameters of the form _ga=2320.021-012302 or _gl=02.10320.01230-123
  stripGaParam (str) {
    str = str.replace(/(_ga=[0-9.-]+)/g, '_ga=[id]')
    str = str.replace(/(_gl=[a-zA-Z0-9._\-*]+)/g, '_gl=[id]')
    return str
  }

  getTitle () {
    return stripPossiblePII(document.title)
  }

  // window.httpStatusCode is set in the source of the error page in static
  // https://github.com/alphagov/static/blob/1c734451f2dd6fc0c7e80beccbdcbfa5aaffd0e4/app/views/root/_error_page.html.erb#L41-L43
  getStatusCode () {
    if (window.httpStatusCode) {
      return window.httpStatusCode.toString()
    } else {
      return '200'
    }
  }

  getViewPort () {
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    return vw + 'x' + vh
  }

  getMetaContent (name) {
    var tag = document.querySelector('meta[name="govuk:' + name + '"]')
    if (tag) {
      var contentAttribute = tag.getAttribute('content')
      if (contentAttribute === '') {
        return undefined
      }
      return contentAttribute
    } else {
      return this.nullValue
    }
  }

  getLanguage () {
    var content = document.getElementById('content')
    var html = document.querySelector('html')
    if (content) {
      var contentLanguage = content.getAttribute('lang')
      if (contentLanguage) {
        return contentLanguage
      }
    }
    // html.getAttribute('lang') is untested - Jasmine would not allow lang to be set on <html>.
    return html.getAttribute('lang') || this.nullValue
  }

  // return only the date from given timestamps of the form
  // 2022-03-28T19:11:00.000+00:00
  stripTimeFrom (value) {
    if (value !== undefined) {
      return value.split('T')[0]
    } else {
      return this.nullValue
    }
  }
}

export default PageViewTracker
