import {
  trackEvent,
  trackPageView,
  trackCardExpand,
  trackCardCollapse,
  trackSectionOpen,
  trackOutboundClick,
  trackGalleryImage,
  trackSearch
} from '../analytics'

describe('analytics', () => {
  beforeEach(() => {
    window.gtag = jest.fn()
    window.clarity = jest.fn()
  })

  afterEach(() => {
    delete window.gtag
    delete window.clarity
    jest.clearAllMocks()
  })

  test('trackEvent forwards name and params to gtag', () => {
    trackEvent('my_event', { foo: 'bar', count: 2 })
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'my_event',
      expect.objectContaining({ foo: 'bar', count: 2 })
    )
  })

  test('trackEvent sets debug_mode on localhost (jsdom)', () => {
    trackEvent('my_event')
    const params = window.gtag.mock.calls[0][2]
    expect(params.debug_mode).toBe(true)
  })

  test('trackEvent mirrors event and string params to clarity', () => {
    trackEvent('my_event', { foo: 'bar', num: 5 })
    expect(window.clarity).toHaveBeenCalledWith('event', 'my_event')
    expect(window.clarity).toHaveBeenCalledWith('set', 'foo', 'bar')
    // non-strings are not sent as clarity tags
    expect(window.clarity).not.toHaveBeenCalledWith('set', 'num', 5)
  })

  test('trackEvent is a no-op without gtag/clarity', () => {
    delete window.gtag
    delete window.clarity
    expect(() => trackEvent('my_event')).not.toThrow()
  })

  test('trackPageView sends page params', () => {
    trackPageView('/portfolio', 'Portfolio | Zavaar Shah')
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'page_view',
      expect.objectContaining({
        page_path: '/portfolio',
        page_title: 'Portfolio | Zavaar Shah',
        page_location: window.location.href
      })
    )
  })

  test('trackCardExpand sends card_title and method', () => {
    trackCardExpand('Jeva', 'more_button')
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'card_expand',
      expect.objectContaining({ card_title: 'Jeva', method: 'more_button' })
    )
  })

  test('trackCardCollapse converts view time to seconds', () => {
    trackCardCollapse('Jeva', 12500)
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'card_close',
      expect.objectContaining({ card_title: 'Jeva', view_time_sec: 13 })
    )
  })

  test('trackSectionOpen omits card_title when unknown', () => {
    trackSectionOpen('Timeline')
    const params = window.gtag.mock.calls[0][2]
    expect(params.section_title).toBe('Timeline')
    expect(params).not.toHaveProperty('card_title')
  })

  test('trackSectionOpen includes parent card when known', () => {
    trackSectionOpen('Timeline', 'Jeva')
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'section_open',
      expect.objectContaining({ section_title: 'Timeline', card_title: 'Jeva' })
    )
  })

  test('trackOutboundClick sends link params', () => {
    trackOutboundClick('https://github.com/thatziv', 'github', 'footer')
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'outbound_click',
      expect.objectContaining({
        link_url: 'https://github.com/thatziv',
        link_label: 'github',
        link_source: 'footer'
      })
    )
  })

  test('trackGalleryImage sends image params', () => {
    trackGalleryImage('Home page', '/pics/ext/marketpulse/home.png', 'open')
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'gallery_image',
      expect.objectContaining({
        image_label: 'Home page',
        image_path: '/pics/ext/marketpulse/home.png',
        method: 'open'
      })
    )
  })

  test('trackSearch sends search_term and results_count', () => {
    trackSearch('react', 3)
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'search',
      expect.objectContaining({ search_term: 'react', results_count: 3 })
    )
  })
})
