/**
 * Simple heading paired with md-supported description.
 * @interface
 */
export declare interface Generic {
  /**
   * List of title-content pairs to use
   */
  entries: Array<Entry>
}

declare interface Entry {
  /**
   * Title for a given entry
   */
  title: string
  /**
   * inner content below title
   * @implements Markdown
   */
  content: string
}
