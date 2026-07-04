import { ReactNode } from 'react'

/**
 * A card component displaying project information with expandable content
 * @interface
 */
export declare interface MediaCard {
  /**
   * Title of the card
   * @type {string}
   */
  title: string
  /**
   * URL/path to the banner image
   * @type {string}
   */
  banner: string
  /**
   * Card description rendered as Markdown
   * @type {string}
   */
  description: string
  /**
   * Comma-separated tag values rendered as Tags components
   * @type {string}
   */
  tags: string
  /**
   * Pipe-separated objectives rendered as Objectives component
   * @type {string}
   */
  objectives: string
  /**
   * Timeline entries rendered as Timeline component
   * @type {Array<[string, string]>}
   */
  timeline: Array<[string, string]>
  /**
   * Extra components rendered before children in the modal
   * @type {ReactNode}
   * @optional
   */
  prechildren?: ReactNode
  /**
   * Grid column size for the card (default: 6)
   * @type {number}
   * @optional
   */
  size?: number
  /**
   * Additional React children rendered in the modal
   * @type {ReactNode}
   * @optional
   */
  children?: ReactNode
}
