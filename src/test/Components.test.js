import React from 'react'
import TestRenderer from 'react-test-renderer'
import DateRange from '../components/DateRange'
import Footer from '../components/Footer'
import Tags from '../components/Tags'
import YouTubeEmbed from '../components/YouTubeEmbed'
import Objectives from '../components/Objectives'
// import Gallery from '../components/Gallery' // FIXME
import Timeline from '../components/Timeline'
import { areSetsEqual } from '../utils'
import Section from '../components/Section'
import { MemoryRouter } from 'react-router-dom'
// import { waitFor } from '@testing-library/react'

/**
 * Traverses a `TestRenderer` json tree to its constituents
 * @param {*} tree
 * @param {function} cb
 * @void
 */
const traverseTree = (tree, cb) => {
  if (tree && typeof tree === 'string') {
    cb(tree)
    return
  }
  if (tree.children) {
    for (let child of tree.children) {
      traverseTree(child, cb)
    }
  }
}

describe('Tests components', () => {
  let testRenderer

  afterEach(() => {
    jest.clearAllMocks()
    // Clean up the TestRenderer instance
    if (testRenderer) testRenderer.unmount()
  })

  test('Footer', () => {
    testRenderer = TestRenderer.create(<Footer />)
    expect(testRenderer.toJSON().children.join('')).toContain(
      'Created by Zavaar Shah'
    )
  })

  describe('DateRange', () => {
    const testData = [
      ['December 31, 1969', 'When clocks started to count up!'],
      ['January 1, 1970', 'The day of reckoning...']
    ]
    test('Checks date range (ongoing)', () => {
      const dateRangeIncomplete = TestRenderer.create(
        <DateRange complete={false} timeline={testData} />
      )
      expect(dateRangeIncomplete.toJSON().children[0]).toBe('1969 - Now')
      dateRangeIncomplete.unmount()
    })
    test('Checks full date range (competed)', () => {
      const dateRangeCompleted = TestRenderer.create(
        <DateRange complete={true} timeline={testData} />
      )
      expect(dateRangeCompleted.toJSON().children[0]).toBe('1969 - 1970')
      dateRangeCompleted.unmount()
    })
  })

  test('Tags', () => {
    const testContent = 'Test-Driven Development'
    testRenderer = TestRenderer.create(<Tags>{testContent}</Tags>)
    expect(testRenderer.toJSON().children[0].children[1].children[0]).toBe(
      testContent
    )
  })

  test('YouTubeEmbed', () => {
    const id = 'dQw4w9WgXcQ'
    testRenderer = TestRenderer.create(<YouTubeEmbed id={id} />)
    expect(testRenderer.toJSON().children[0].props.src).toBe(
      `https://www.youtube-nocookie.com/embed/${id}`
    )
  })

  test('Objectives', () => {
    const objectives = 'One|Two|Three|Four|Five'
    testRenderer = TestRenderer.create(<Objectives list={objectives} />)
    const scrapedObjectives = testRenderer
      .toJSON()
      .children[0].children.map(
        (objective) => objective.children[0].children[0].children[0]
      )
    const tArr = objectives.split('|')
    expect(scrapedObjectives).toEqual(tArr)
  })

  test('Timeline', () => {
    const testData = [
      ['December 31, 1969', 'When clocks started to count up!'],
      ['January 1, 1970', 'The day of reckoning...']
    ]
    let originalContents = new Set()
    for (let i = 0; i < testData.length; i++) {
      originalContents
        .add((i + 1).toString())
        .add(testData[i][0])
        .add(testData[i][1])
    }
    const tlElement = TestRenderer.create(
      <Timeline steps={testData} />
    ).toJSON()
    let orderedContents = new Set()

    traverseTree(tlElement.children[1].children[1], (tree) => {
      orderedContents.add(tree)
    })
    expect(areSetsEqual(orderedContents, originalContents)).toBe(true)
  })

  test('Section', async () => {
    const heading = 'My Accordion heading'
    const icon = 'fs-brands fa-facebook'
    const children = <h1>My inner content</h1>
    testRenderer = TestRenderer.create(
      <MemoryRouter initialEntries={[`/?${heading}=true`]}>
        <Section title={heading} icon={icon}>
          {children}
        </Section>
      </MemoryRouter>
    )
    // waitFor(() => {
    //   expect(
    //     testRenderer.toJSON().children[0].includes('Mui-expanded')
    //   ).toBeTruthy()
    // })
    // TODO: Test query params and expansion based on them
    let expectedContent = new Set([
      '  ',
      'My Accordion heading',
      'expand_more',
      'My inner content'
    ])
    let content = new Set()
    traverseTree(testRenderer.toJSON(), (val) => {
      content.add(val)
    })
    expect(areSetsEqual(expectedContent, content)).toBeTruthy()
  })
  // test('Gallery', () => {
  //   const galleryData = [
  //     { label: 'This is me on a wednesday.', imgPath: '//test/img' },
  //     { label: 'This is me right now.', imgPath: '//test/img2' }
  //   ]
  //   testRenderer = TestRenderer.create(
  //     <>
  //       <Gallery images={galleryData} />
  //     </>
  //   )
  //   expect(testRenderer.toJSON()).toBeTruthy()
  // })
  // FIXME: Test Gallery
  // test gallery
})
