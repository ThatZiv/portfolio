/**
 * Central analytics: sends events to GA4 (gtag) and mirrors them to
 * Microsoft Clarity so session recordings can be filtered by event.
 * All params use GA4-style snake_case names; register them as
 * event-scoped custom dimensions in the GA4 admin to see them in reports.
 */

// localhost events show up in GA4 DebugView instead of polluting reports
const isLocal = () =>
  typeof window !== 'undefined' &&
  /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)

/**
 * Send an event to GA4 and Clarity.
 * @param {string} name - GA4 event name (snake_case)
 * @param {Record<string, string|number|boolean>} [params] - event params
 */
export function trackEvent(name, params = {}) {
  const payload = { ...params }
  if (isLocal()) payload.debug_mode = true
  if (typeof window === 'undefined') return
  if (window.gtag) window.gtag('event', name, payload)
  if (window.clarity) {
    window.clarity('event', name)
    // tags let Clarity recordings be filtered by these values
    for (const [key, value] of Object.entries(params)) {
      if (typeof value === 'string' && value) window.clarity('set', key, value)
    }
  }
}

/**
 * SPA page view (HashRouter routes are invisible to GA4's default tracking).
 * @param {string} path - normalized path, e.g. "/portfolio"
 * @param {string} title - document title
 */
export const trackPageView = (path, title) =>
  trackEvent('page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title
  })

/**
 * @param {string} cardTitle
 * @param {'card_click'|'more_button'|'url_param'} method - how it was opened
 */
export const trackCardExpand = (cardTitle, method = 'card_click') =>
  trackEvent('card_expand', { card_title: cardTitle, method })

/**
 * @param {string} cardTitle
 * @param {number} viewTimeMs - how long the card modal stayed open
 */
export const trackCardCollapse = (cardTitle, viewTimeMs = 0) =>
  trackEvent('card_close', {
    card_title: cardTitle,
    view_time_sec: Math.round(viewTimeMs / 1000)
  })

/**
 * @param {string} sectionTitle - accordion title (e.g. "Timeline")
 * @param {string} [cardTitle] - parent card, if known
 */
export const trackSectionOpen = (sectionTitle, cardTitle) =>
  trackEvent('section_open', {
    section_title: sectionTitle,
    ...(cardTitle ? { card_title: cardTitle } : {})
  })

/**
 * @param {string} url - destination
 * @param {string} label - human-friendly name (service, card, etc.)
 * @param {string} [source] - where on the site the link lives
 */
export const trackOutboundClick = (url, label, source) =>
  trackEvent('outbound_click', {
    link_url: url,
    link_label: label,
    ...(source ? { link_source: source } : {})
  })

/**
 * @param {string} imageLabel
 * @param {string} imagePath
 * @param {'click'|'open'} action - clicked in gallery vs opened in new tab
 */
export const trackGalleryImage = (imageLabel, imagePath, action = 'click') =>
  trackEvent('gallery_image', {
    image_label: imageLabel,
    image_path: imagePath,
    method: action
  })

/**
 * GA4 recommended "search" event (search_term is auto-collected).
 * @param {string} searchTerm
 * @param {number} resultsCount
 */
export const trackSearch = (searchTerm, resultsCount = 0) =>
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  })
