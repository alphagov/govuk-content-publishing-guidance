import { loadAnalytics, cookiesAccepted } from './analytics.mjs';
import { getConsentCookie, isValidConsentCookie } from './cookie-functions.mjs'
import CookieBanner from './cookie-banner.mjs';
import CookiesPage from './cookies-page.mjs';
import { createAll } from 'govuk-frontend';
import SearchTracker from './search-tracker.mjs';

const initialiseAnalytics = () => {
  if (cookiesAccepted()) {
    loadAnalytics()
  }

  createAll(SearchTracker)
}
