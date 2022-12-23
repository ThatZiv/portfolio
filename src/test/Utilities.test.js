
import * as utils from "../utils";

describe("Tests utilities", () => {
    test("Capitalize First Letter", () => {
        expect(utils.capFirstLetter("zua")).toBe("Zua")
    })
})