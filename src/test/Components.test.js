import React from "react";
import TestRenderer from 'react-test-renderer';
import DateRange from "../components/DateRange";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Objectives from "../components/Objectives";
import Gallery from "../components/Gallery";
describe('Tests components', () => {
  test("Footer", () => {
    const footerInstance = TestRenderer.create(<Footer />);
    expect(footerInstance.toJSON().children.join("")).toContain("Made by Zavaar Shah");
  })

  describe("DateRange Tests", () => {
    const testData = [
      ["December 31, 1969", "When clocks started to count up!"],
      ["January 1, 1970", "The day of reckoning..."]
    ]
    const dateRange = (completed) => TestRenderer.create(<DateRange complete={completed} timeline={testData} />)
    test("Checks date range (ongoing)", () => {
      expect(dateRange(false).toJSON().children[0]).toBe("1969 - Now")
    })
    test("Checks full date range (competed)", () => {
      expect(dateRange(true).toJSON().children[0]).toBe("1969 - 1970")
    })
  })

  test("Tags renders correctly", () => {
    const testContent = "Test-Driven Development"
    const tag = TestRenderer.create(<Tags>{testContent}</Tags>);
    expect(tag.toJSON().children[0].children[1].children[0]).toBe(testContent)
  })

  test("YouTubeEmbed renders", () => {
    const id = "dQw4w9WgXcQ"
    const embed = TestRenderer.create(<YouTubeEmbed id={id} />)
    expect(embed.toJSON().children[0].props.src).toBe(`https://www.youtube-nocookie.com/embed/${id}`)
  })

  test("Objectives renders correctly", () => {
    const objectives = "One|Two|Three|Four|Five"
    const embed = TestRenderer.create(<Objectives list={objectives} />).toJSON()
    const scrapedObjectives = embed.children[0].children.map((objective) => objective.children[0].children[0].children[0])
    const tArr = objectives.split("|")
    expect(scrapedObjectives).toEqual(tArr)
  })

  /* test("Gallery", () => {
    const galleryData = [
      { "label": "This is me on a wednesday.", "imgPath": "//test/img" },
      { "label": "This is me right now.", "imgPath": "//test/img2" },
    ]
    const gallery = TestRenderer.create(<Gallery images={galleryData} />).toJSON()

  }) */

});

