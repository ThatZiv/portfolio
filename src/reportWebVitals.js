export default function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then((module) => {
      const {
        onCLS,
        onFCP,
        onINP,
        onLCP,
        onTTFB,
        onFID,
        getCLS,
        getFCP,
        getFID,
        getLCP,
        getTTFB,
      } = module

      const cls = onCLS || getCLS
      const fcp = onFCP || getFCP
      const inp = onINP || onFID || getFID
      const lcp = onLCP || getLCP
      const ttfb = onTTFB || getTTFB

      if (cls) cls(onPerfEntry)
      if (fcp) fcp(onPerfEntry)
      if (inp) inp(onPerfEntry)
      if (lcp) lcp(onPerfEntry)
      if (ttfb) ttfb(onPerfEntry)
    })
  }
}
