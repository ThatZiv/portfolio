// for intellisense
export declare interface Section {
    meta: {
        /** Title of the card */
        title: string,
        /** URL of the image  */
        banner: string,
        /** whether the entry is complete or not
         * @it changes the "DateRange" component on a given card 
         */
        complete: boolean,
        /** 
         * Comma-separated values for tags 
         * @example "Tag,Another Tag,Final Tag"
         * @it adds "Tags" components to the bottom of each card
         * */
        tags: string,
        /**
         * List of objectives with pipe-separated values
         * @example `I built this tech using [...]|Integrated [...] API using [...]`
         */
        objectives: string,
        /** Card content description */
        description: string,
        /**
         * Timeline content
         * @example [
         *  ["December 1, 1969", "First entry"],
         *  ["December 2, 1969", "Second entry"],
         *  ["December 3, 1969", "Final entry"]
         * ]
         */
        timeline: Array<[string, string]>
    },
    /** Any extra components in the card */
    components: { [key: string]: () => JSX.Element }
}