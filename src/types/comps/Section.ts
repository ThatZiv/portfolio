import React from 'react'

/**
 * a customizable accordion component
 * @interface
 */
export declare interface Section {
  /**
   * Default behavior of the section
   * @it renders the section opened/closed on mount
   * @type {boolean}
   * */
  open?: boolean
  /**
   * An icon class name from FontAwesome. Get from here: https://fontawesome.com/search
   * @type {string}
   */
  icon: string
  /**
   * Title for accordion
   * @type {string}
   */
  title: string
  /**
   * Accordion inner-content
   * @type {any}
   */
  children: any
}
