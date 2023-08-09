/** An interface for a route declaration  */
export declare interface Page {
  /** @it gets listed on the navbar (first char capitalized) */
  label: string
  /** The route itself */
  location: string
  /** Font-awesome icon string */
  icon: string
  /** Lazy-loaded react component (for fallback and suspense between routing) */
  component: React.LazyExoticComponent<() => JSX.Element>
}
