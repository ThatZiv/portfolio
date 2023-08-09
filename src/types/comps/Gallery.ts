/**
 * a mobile-friendly, multiple-paged, Gallery component
 * @interface
 */
export declare interface Gallery {
  /**
   * List of pictures to use
   */
  images: Array<Image>
  /**
   * Timeout interval for auto-swiping to next image
   */
  timeout?: number
}

declare interface Image {
  /**
   * Caption for given image
   */
  label: string
  /**
   * path to image
   */
  imgPath: string
}
