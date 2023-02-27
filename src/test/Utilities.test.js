
import * as utils from "../utils";

describe("Tests utilities", () => {
    test("Capitalize First Letter", () => {
        expect(utils.capFirstLetter("zua")).toBe("Zua")
    })
    test("Set comparison", () => {
        const a = new Set([1, 2, 3])
        const b = new Set([1, 2, 3])
        expect(utils.areSetsEqual(a, b)).toBeTruthy()
        const c = new Set([4, 5, 6])
        const d = new Set([7, 8, 9])
        expect(utils.areSetsEqual(c, d)).toBeFalsy()

    })
})