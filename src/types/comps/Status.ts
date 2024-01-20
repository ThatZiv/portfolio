import { ReactNode } from 'react'

export declare interface Status {
  /**
   * The URL of the service to check.
   * @type {string}
   */
  url: string
  /**
   * The regular expression pattern used to match against the fetched text.
   * @type {string}
   */
  pattern: string
  /**
   * If true, renders the status information in a Paper component.
   * @type {boolean}
   * @default false
   * @optional
   */
  paper?: boolean
  /**
   * If true, renders a circular badge with a dot indicating the status.
   * @type {boolean}
   * @default false
   * @optional
   */
  dot?: boolean
  /**
   * React children to be rendered inside the badge (if dot is true).
   * @type {React.ReactNode}
   * @optional
   */
  children?: ReactNode
}
