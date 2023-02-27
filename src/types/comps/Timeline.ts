/**
 * Renders the a stepper based on raw data
 * @interface
 */
export declare interface Timeline {
    /**
     * Raw data used to create the stepper component used in every `MediaCard` entry
     * @type {string[[date: string, event: string ]]}
     * @example ```
     * [
        ["December 31, 1969", "When clocks started to count up!"],
        ["January 1, 1970", "The day of reckoning..."]
    ]```
     */
    steps: [
        date: string,
        event: string
    ][]
}