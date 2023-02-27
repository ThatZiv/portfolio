import React from "react";
import TestRenderer from 'react-test-renderer';
import DateRange from "../components/DateRange";
import Footer from "../components/Footer";
import Tags from "../components/Tags";
import YouTubeEmbed from "../components/YouTubeEmbed";
import Objectives from "../components/Objectives";
import Gallery from "../components/Gallery";
import Timeline from "../components/Timeline";
import { areSetsEqual } from "../utils";
describe('Tests components', () => {

  test("Footer", () => {
    const footerInstance = TestRenderer.create(<Footer />);
    expect(footerInstance.toJSON().children.join("")).toContain("Created by Zavaar Shah");
  })

  describe("DateRange", () => {
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

  test("Tags", () => {
    const testContent = "Test-Driven Development"
    const tag = TestRenderer.create(<Tags>{testContent}</Tags>);
    expect(tag.toJSON().children[0].children[1].children[0]).toBe(testContent)
  })

  test("YouTubeEmbed", () => {
    const id = "dQw4w9WgXcQ"
    const embed = TestRenderer.create(<YouTubeEmbed id={id} />)
    expect(embed.toJSON().children[0].props.src).toBe(`https://www.youtube-nocookie.com/embed/${id}`)
  })

  test("Objectives", () => {
    const objectives = "One|Two|Three|Four|Five"
    const embed = TestRenderer.create(<Objectives list={objectives} />).toJSON()
    const scrapedObjectives = embed.children[0].children.map((objective) => objective.children[0].children[0].children[0])
    const tArr = objectives.split("|")
    expect(scrapedObjectives).toEqual(tArr)
  })

  test("Timeline", () => {
    const testData = [
      ["December 31, 1969", "When clocks started to count up!"],
      ["January 1, 1970", "The day of reckoning..."]
    ]
    let originalContents = new Set()
    for (let i = 0; i < testData.length; i++) {
      originalContents.add((i + 1).toString()).add(testData[i][0]).add(testData[i][1])
    }
    const tlElement = TestRenderer.create(<Timeline steps={testData} />).toJSON()
    let orderedContents = new Set()
    const traverseTree = (tree) => {
      if (tree && typeof (tree) === "string") {
        orderedContents.add(tree)
        return;
      }
      if (tree.children) {
        for (let child of tree?.children) {
          traverseTree(child)
        }
      }
    }
    traverseTree(tlElement.children[1].children[1])
    expect(areSetsEqual(orderedContents, originalContents)).toBe(true)
  })

  test("Section", () => {
    
  })
  /* test("Gallery", () => {
    const galleryData = [
      { "label": "This is me on a wednesday.", "imgPath": "//test/img" },
      { "label": "This is me right now.", "imgPath": "//test/img2" },
    ]
    const gallery = TestRenderer.create(<Gallery images={galleryData} />).toJSON()
    console.log(gallery)
  }) */

});

