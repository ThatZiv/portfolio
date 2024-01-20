import React from 'react'
import TestRenderer from 'react-test-renderer'
import DateRange from '../components/DateRange'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Tags from '../components/Tags'
import YouTubeEmbed from '../components/YouTubeEmbed'
import Objectives from '../components/Objectives'
import Timeline from '../components/Timeline'
import { areSetsEqual } from '../utils'
import Section from '../components/Section'
import { MemoryRouter } from 'react-router-dom'
import Status from '../components/Status'
import { green, red } from '@mui/material/colors'
import '@testing-library/jest-dom'
import SocialMedia from '../components/SocialMedia'

// eslint-disable-next-line no-undef
global.fetch = jest.fn(() => {
  return Promise.resolve({
    text: () => Promise.resolve('<html><title>sad</title></html>'),
    json: () => Promise.resolve({ data: '12345' })
  })
})

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
    expect(testRenderer.toJSON()).toMatchSnapshot()
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
    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  test('YouTubeEmbed', () => {
    const id = 'dQw4w9WgXcQ'
    testRenderer = TestRenderer.create(<YouTubeEmbed id={id} />)
    expect(testRenderer.toJSON()).toMatchSnapshot()
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

  describe('Timeline', () => {
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
    testRenderer = TestRenderer.create(<Timeline steps={testData} />)
    let orderedContents = new Set()

    traverseTree(testRenderer.toJSON().children[1].children[1], (tree) => {
      orderedContents.add(tree)
    })

    test('Checks timeline', () => {
      expect(areSetsEqual(orderedContents, originalContents)).toBe(true)
    })

    test('renders correctly', () => {
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
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

  test('Gallery', () => {
    const images = [
      {
        label: 'My Pic 1',
        imgPath: 'https://picsum.photos/200/300'
      },
      {
        label: 'My Pic 2',
        imgPath: 'https://picsum.photos/200/300'
      },
      {
        label: 'My Pic 3',
        imgPath: 'https://picsum.photos/200/300'
      }
    ]
    testRenderer = TestRenderer.create(React.createElement(Gallery, { images }))

    expect(testRenderer.toJSON()).toMatchSnapshot()
  })

  describe('Status', () => {
    let url = 'https://www.google.com'
    const pattern = '/google/'
    // when good, color: rgb(67, 160, 71);
    // when bad, color: rgb(229, 57, 53);
    test('renders status CARD correctly', () => {
      testRenderer = TestRenderer.create(
        React.createElement(Status, { url, pattern, paper: true })
      )

      expect(testRenderer.toJSON()).toMatchSnapshot()
      const renderedString = JSON.stringify(testRenderer.toJSON())
      expect(renderedString).toContain(
        JSON.stringify({
          color: green[600]
        })
      )
      expect(renderedString).toContain('Online')
      testRenderer.unmount()
    })

    test("renders status CARD correctly when it's offline", async () => {
      jest
        // eslint-disable-next-line no-undef
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('Failed to fetch'))
        )
      testRenderer = TestRenderer.create(
        React.createElement(Status, { url, pattern, paper: true })
      )
      // allow the reject to be processed
      await new Promise((resolve) => setTimeout(resolve, 0))
      expect(testRenderer.toJSON()).toMatchSnapshot()
      const renderedString = JSON.stringify(testRenderer.toJSON())
      expect(renderedString).toContain(
        JSON.stringify({
          color: red[600]
        })
      )
      expect(renderedString).toContain('Offline')
      testRenderer.unmount()
    })

    test('renders status DOT correctly', async () => {
      testRenderer = TestRenderer.create(
        React.createElement(Status, { url, pattern, dot: true })
      )

      expect(testRenderer.toJSON()).toMatchSnapshot()

      testRenderer.unmount()
    })

    test("renders status DOT correctly when it's offline", async () => {
      testRenderer = TestRenderer.create(
        React.createElement(Status, { url, pattern, dot: true })
      )

      await new Promise((resolve) => setTimeout(resolve, 0))
      jest
        // eslint-disable-next-line no-undef
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('Failed to fetch'))
        )

      expect(testRenderer.toJSON()).toMatchSnapshot()
    })
  })

  describe('SocialMedia', () => {
    const icon = 'fs-brands fa-facebook'
    const url = 'https://www.facebook.com'
    const name = 'Facebook'

    afterEach(() => {
      testRenderer && testRenderer.unmount()
    })

    it('renders with only URL', () => {
      testRenderer = TestRenderer.create(
        <SocialMedia url="https://example.com" />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('renders service when both icon and name are provided', () => {
      testRenderer = TestRenderer.create(
        <SocialMedia url={url} icon={icon} name={name} />
      )
      expect(testRenderer).toMatchSnapshot()
    })

    test('renders with URL and icon', () => {
      const testRenderer = TestRenderer.create(
        <SocialMedia url={url} icon={icon} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('renders with URL and name', () => {
      const testRenderer = TestRenderer.create(
        <SocialMedia url={url} name={name} />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test('renders with URL, confirmation dialog, and showName', () => {
      const testRenderer = TestRenderer.create(
        <SocialMedia url={url} confirmation showName />
      )
      expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    test.todo(
      'handles click event and shows confirmation dialog' /*,async () => {
      const testRenderer = TestRenderer.create(
        <SocialMedia url={url} confirmation />
      )
      // Simulate click event
      const dialog = testRenderer.root.findByProps({
        'data-testid': 'social-media-redirect-dialog'
      })
      dialog.props.onClick()
      // Log the tree structure to understand the rendered components
      await new Promise((resolve) => setTimeout(resolve, 0))

      try {
        // Attempt to find the element with the specified data-testid
        const alertDialog = testRenderer.root.findByProps({
          'data-testid': 'alert-dialog'
        })

        await new Promise((resolve) => setTimeout(resolve, 5))

        expect(alertDialog.props.open).toBe(true)
      } catch (error) {
        // Log the error to understand the issue
        console.error(error)
      }
    })*/
    )
  })
})
