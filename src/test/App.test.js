import React from "react";
import TestRenderer from 'react-test-renderer';
import Footer from "../components/Footer";
import * as utils from "../utils";
it('Tests all components', () => {
  const footerInstance = TestRenderer.create(<Footer />);
  expect(footerInstance.toJSON().children.join("")).toContain("Made by Zavaar Shah");
});


it("Tests all utilities", () => {
  expect(utils.capFirstLetter("zua")).toBe("Zua")
})