export declare interface SocialMedia {
  /**
   * The url that the button will redirect to.
   * If no icon is provided, the url's domain will be used as the icon.
   * @type {string}
   */
  url: string
  /**
   * The Font Awesome icon name.
   * If provided, it should be a valid Font Awesome icon name.
   * If both `icon` and `name` are provided, it will default to icon?
   * @type {string}
   * @optional
   */
  icon?: string
  /**
   * The name/label of the button.
   * If both `icon` and `name` are provided, it will default to icon
   * @type {string}
   * @optional
   */
  name?: string
  /**
   * A flag indicating whether to show a confirmation dialog before redirecting
   * @type {boolean}
   * @default false
   * @optional
   */
  confirmation?: boolean
  /**
   * A flag indicating whether to show the name in the button. If false, only the icon will be shown
   * @type {boolean}
   * @default false
   * @optional
   */
  showName?: boolean
}
