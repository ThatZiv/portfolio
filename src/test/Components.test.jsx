import React from 'react'
import TestRenderer from 'react-test-renderer'
import DateRange from '../components/DateRange'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Tags from '../components/Tags'
import YouTubeEmbed from '../components/YouTubeEmbed'
import Objectives from '../components/Objectives'
import Timeline from '../components/Timeline'
import SwipeableView from '../components/SwipeableView'
import { ViewportProvider } from '../contexts/viewport'
import { areSetsEqual } from '../utils'
import Section from '../components/Section'
import { MemoryRouter } from 'react-router-dom'
import Status from '../components/Status'
import { green, red } from '@mui/material/colors'
import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import SocialMedia from '../components/SocialMedia'
const { act } = TestRenderer
// import { fireEvent } from '@testing-library/react'

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

const collectText = (tree) => {
  const values = []
  traverseTree(tree, (value) => {
    values.push(value)
  })
  return values
}

const collectTrimmedText = (tree) =>
  collectText(tree)
    .map((value) => value.trim())
    .filter((value) => value.length > 0)

const getAnchorHrefs = (renderer) =>
  renderer.root.findAllByType('a').map((node) => node.props.href)

const getFirstIconClassName = (renderer) =>
  renderer.root.findByType('i').props.className

const getTextContent = (renderer) => collectTrimmedText(renderer.toJSON())

const stablePropsAllowlist = new Set([
  'href',
  'src',
  'alt',
  'title',
  'target',
  'rel',
  'role',
  'type',
  'value',
  'aria-label',
  'aria-labelledby',
  'data-testid'
])

const normalizeTextNode = (value) => {
  if (typeof value !== 'string') return value
  const collapsed = value.replace(/\s+/g, ' ').trim()
  return collapsed.length > 0 ? collapsed : null
}

const sanitizeTree = (node) => {
  if (node == null) return null
  if (Array.isArray(node)) {
    const sanitized = node.map(sanitizeTree).filter((child) => child != null)
    return sanitized.length > 0 ? sanitized : null
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return normalizeTextNode(String(node))
  }
  if (node.type === 'style') return null
  const props = {}
  if (node.props) {
    Object.keys(node.props).forEach((key) => {
      if (stablePropsAllowlist.has(key)) {
        props[key] = node.props[key]
      }
    })
  }
  const children = (node.children || [])
    .map(sanitizeTree)
    .filter((child) => child != null)
  const out = { type: node.type }
  if (Object.keys(props).length > 0) out.props = props
  if (children.length > 0) out.children = children
  return out
}

const getStableSnapshot = (renderer) => sanitizeTree(renderer.toJSON())

const renderWithTheme = (ui) =>
  TestRenderer.create(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('Tests components', () => {
  let testRenderer

  afterEach(() => {
    jest.clearAllMocks()
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        text: () => Promise.resolve('<html><title>google</title></html>'),
        json: () => Promise.resolve({ data: '12345' })
      })
    })
    // Clean up the TestRenderer instance
    if (testRenderer) testRenderer.unmount()
  })

  test('Footer', () => {
    testRenderer = renderWithTheme(<Footer />)
    const el = testRenderer.toJSON()
    expect(
      el.children
        .map((c) => c.children || c || '')
        .map((c) => (typeof c === 'string' ? c.trim() : c))
        .filter((c) => c !== '')
        .flat()
        .join(' ')
    ).toContain(`© ${new Date().getFullYear()} Zavaar Shah`)
  })

  describe('DateRange', () => {
    const testData = [
      ['December 31, 1969', 'When clocks started to count up!'],
      ['January 1, 1970', 'The day of reckoning...']
    ]
    test('Checks date range (ongoing)', () => {
      const dateRangeIncomplete = renderWithTheme(
        <DateRange complete={false} timeline={testData} />
      )
      const dateRangeJson = dateRangeIncomplete.toJSON()
      expect(dateRangeJson).not.toBeNull()
      expect(dateRangeJson?.children?.[0]).toBe('1969 - Now')
      dateRangeIncomplete.unmount()
    })
    test('Checks full date range (competed)', () => {
      const dateRangeCompleted = renderWithTheme(
        <DateRange complete={true} timeline={testData} />
      )
      const dateRangeJson = dateRangeCompleted.toJSON()
      expect(dateRangeJson).not.toBeNull()
      expect(dateRangeJson?.children?.[0]).toBe('1969 - 1970')
      dateRangeCompleted.unmount()
    })
  })

  test('Tags', () => {
    const testContent = 'Test-Driven Development'
    testRenderer = renderWithTheme(<Tags>{testContent}</Tags>)
    const textValues = collectTrimmedText(testRenderer.toJSON())
    expect(textValues).toContain(testContent)
    expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
  })

  test('YouTubeEmbed', () => {
    const id = 'dQw4w9WgXcQ'
    testRenderer = renderWithTheme(<YouTubeEmbed id={id} />)
    const iframe = testRenderer.root.findByType('iframe')
    expect(iframe.props.src).toBe(
      `https://www.youtube-nocookie.com/embed/${id}`
    )
    expect(iframe.props.title).toBe(id)
    expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
  })

  test('Objectives', () => {
    const objectives = 'One|Two|Three|Four|Five'
    testRenderer = renderWithTheme(<Objectives list={objectives} />)
    const textValues = collectTrimmedText(testRenderer.toJSON())
    const expected = objectives.split('|')
    expected.forEach((objective) => {
      expect(textValues).toContain(objective)
    })
    expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
  })

  describe('Timeline', () => {
    const testData = [
      ['December 31, 1969', 'When clocks started to count up!'],
      ['January 1, 1970', 'The day of reckoning...']
    ]
    const expectedItems = testData.flatMap(([date, event]) => [date, event])

    test('Checks timeline', () => {
      const timelineRenderer = renderWithTheme(<Timeline steps={testData} />)
      const textValues = collectTrimmedText(timelineRenderer.toJSON())
      expectedItems.forEach((item) => {
        expect(textValues).toContain(item)
      })
      timelineRenderer.unmount()
    })

    test('renders step count', () => {
      const timelineRenderer = renderWithTheme(<Timeline steps={testData} />)
      const textValues = collectTrimmedText(timelineRenderer.toJSON())
      testData.forEach(([date]) => {
        const matches = textValues.filter((value) => value === date)
        expect(matches).toHaveLength(1)
      })
      expect(getStableSnapshot(timelineRenderer)).toMatchSnapshot()
      timelineRenderer.unmount()
    })
  })

  test('Section', async () => {
    const heading = 'My Accordion heading'
    const icon = 'fs-brands fa-facebook'
    const children = <h1>My inner content</h1>
    testRenderer = renderWithTheme(
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
    expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
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
    testRenderer = renderWithTheme(React.createElement(Gallery, { images }))
    const imageNodes = testRenderer.root.findAllByType('img')
    expect(imageNodes).toHaveLength(images.length)
    expect(imageNodes.map((node) => node.props.alt)).toEqual(
      images.map((image) => image.label)
    )
    expect(imageNodes.map((node) => node.props.src)).toEqual(
      images.map((image) => image.imgPath)
    )
    expect(getAnchorHrefs(testRenderer)).toContain(images[0].imgPath)
    expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
  })

  describe('Status', () => {
    let url = 'https://www.google.com'
    const pattern = 'google'
    // when good, color: rgb(67, 160, 71);
    // when bad, color: rgb(229, 57, 53);
    test('renders status CARD correctly', async () => {
      // eslint-disable-next-line no-undef
      jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
        Promise.resolve({
          text: () => Promise.resolve('<html><title>google</title></html>')
        })
      )
      await act(async () => {
        testRenderer = renderWithTheme(
          React.createElement(Status, { url, pattern, paper: true })
        )
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      const renderedString = JSON.stringify(testRenderer.toJSON())
      expect(renderedString).toContain(
        JSON.stringify({
          color: green[600]
        })
      )
      expect(renderedString).toContain('Online')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
      testRenderer.unmount()
    })

    test("renders status CARD correctly when it's offline", async () => {
      jest
        // eslint-disable-next-line no-undef
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('Failed to fetch'))
        )
      await act(async () => {
        testRenderer = renderWithTheme(
          React.createElement(Status, { url, pattern, paper: true })
        )
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      const renderedString = JSON.stringify(testRenderer.toJSON())
      expect(renderedString).toContain(
        JSON.stringify({
          color: red[600]
        })
      )
      expect(renderedString).toContain('Offline')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
      testRenderer.unmount()
    })

    test('renders status DOT correctly', async () => {
      await act(async () => {
        testRenderer = renderWithTheme(
          React.createElement(
            Status,
            { url, pattern, dot: true },
            <span>Badge</span>
          )
        )
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      expect(getTextContent(testRenderer)).toContain('Badge')
      const badgeNodes = testRenderer.root.findAll(
        (node) =>
          typeof node.props?.className === 'string' &&
          node.props.className.includes('MuiBadge-root')
      )
      expect(badgeNodes.length).toBeGreaterThan(0)
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
      testRenderer.unmount()
    })

    test("renders status DOT correctly when it's offline", async () => {
      jest
        // eslint-disable-next-line no-undef
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() =>
          Promise.reject(new Error('Failed to fetch'))
        )
      await act(async () => {
        testRenderer = renderWithTheme(
          React.createElement(
            Status,
            { url, pattern, dot: true },
            <span>Badge</span>
          )
        )
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      expect(getTextContent(testRenderer)).toContain('Badge')
      const badgeNodes = testRenderer.root.findAll(
        (node) =>
          typeof node.props?.className === 'string' &&
          node.props.className.includes('MuiBadge-root')
      )
      expect(badgeNodes.length).toBeGreaterThan(0)
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with null pattern', async () => {
      jest
        // eslint-disable-next-line no-undef
        .spyOn(global, 'fetch')
        .mockImplementationOnce(() =>
          Promise.resolve({
            text: () => Promise.resolve('<html>test</html>')
          })
        )
      await act(async () => {
        testRenderer = renderWithTheme(
          React.createElement(Status, { url, pattern: null, paper: true })
        )
        await new Promise((resolve) => setTimeout(resolve, 0))
      })
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
      testRenderer.unmount()
    })
  })

  describe('SwipeableView', () => {
    test('does nothing when onChangeIndex is not provided', () => {
      const testRenderer = TestRenderer.create(
        <SwipeableView index={0} interval={1000}>
          <div>Item 1</div>
          <div>Item 2</div>
        </SwipeableView>
      )
      expect(testRenderer.toJSON()).not.toBeNull()
    })

    test('does nothing when count is 1', () => {
      const testRenderer = TestRenderer.create(
        <SwipeableView index={0} onChangeIndex={() => {}}>
          <div>Only item</div>
        </SwipeableView>
      )
      expect(testRenderer.toJSON()).not.toBeNull()
    })

    test('auto-advances when interval is provided', (done) => {
      const handleChangeIndex = jest.fn()
      const testRenderer = TestRenderer.create(
        <SwipeableView
          index={0}
          onChangeIndex={handleChangeIndex}
          interval={100}
        >
          <div>Item 1</div>
          <div>Item 2</div>
        </SwipeableView>
      )

      setTimeout(() => {
        expect(handleChangeIndex).toHaveBeenCalled()
        testRenderer.unmount()
        done()
      }, 150)
    })

    test('handles x-reverse axis correctly', () => {
      const testRenderer = TestRenderer.create(
        <SwipeableView index={1} axis="x-reverse" onChangeIndex={() => {}}>
          <div>Item 1</div>
          <div>Item 2</div>
        </SwipeableView>
      )
      expect(testRenderer.toJSON()).not.toBeNull()
    })

    test('handles mouse events when enabled', () => {
      const testRenderer = TestRenderer.create(
        <SwipeableView index={0} enableMouseEvents onChangeIndex={() => {}}>
          <div>Item 1</div>
          <div>Item 2</div>
        </SwipeableView>
      )
      expect(testRenderer.toJSON()).not.toBeNull()
    })
  })

  describe('ViewportProvider', () => {
    test('provides width and height context', () => {
      const testRenderer = TestRenderer.create(
        <ViewportProvider>
          <div data-testid="viewport-test">Test</div>
        </ViewportProvider>
      )
      expect(testRenderer.toJSON()).not.toBeNull()
    })
  })

  describe('Gallery', () => {
    test('renders single image', () => {
      const images = [
        {
          label: 'Single Image',
          imgPath: 'https://picsum.photos/200/300'
        }
      ]
      testRenderer = renderWithTheme(React.createElement(Gallery, { images }))
      const imageNodes = testRenderer.root.findAllByType('img')
      expect(imageNodes).toHaveLength(1)
      expect(imageNodes[0].props.alt).toBe('Single Image')
      expect(imageNodes[0].props.src).toBe('https://picsum.photos/200/300')
      testRenderer.unmount()
    })

    test('renders images with custom styles', () => {
      const images = [
        {
          label: 'Styled Image',
          imgPath: 'https://picsum.photos/200/300'
        }
      ]
      testRenderer = renderWithTheme(
        React.createElement(Gallery, {
          images,
          style: { border: '1px solid red' }
        })
      )
      const imageNodes = testRenderer.root.findAllByType('img')
      expect(imageNodes).toHaveLength(1)
      testRenderer.unmount()
    })
  })

  describe('Section', () => {
    test('renders with multiple children', () => {
      const heading = 'Multi Child Section'
      const icon = 'fs-brands fa-facebook'
      testRenderer = renderWithTheme(
        <MemoryRouter initialEntries={[`/?${heading}=true`]}>
          <Section title={heading} icon={icon}>
            <div>Child 1</div>
            <div>Child 2</div>
          </Section>
        </MemoryRouter>
      )
      const json = testRenderer.toJSON()
      expect(json).not.toBeNull()
      testRenderer.unmount()
    })
  })

  describe('SocialMedia', () => {
    const icon = 'fs-brands fa-facebook'
    const url = 'https://www.facebook.com'
    const name = 'Facebook'

    afterEach(() => {
      testRenderer && testRenderer.unmount()
    })

    test('renders with only URL', () => {
      const urlOnly = 'https://example.com'
      testRenderer = renderWithTheme(<SocialMedia url={urlOnly} />)
      expect(getAnchorHrefs(testRenderer)).toContain(urlOnly)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-example')
      expect(iconClassName).toContain('fa-brands')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders service when both icon and name are provided', () => {
      testRenderer = renderWithTheme(
        <SocialMedia url={url} icon={icon} name={name} />
      )
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-solid')
      expect(iconClassName).toContain('fa-facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL and icon', () => {
      testRenderer = renderWithTheme(<SocialMedia url={url} icon={icon} />)
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-brands')
      expect(iconClassName).toContain('fa-facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL and name', () => {
      testRenderer = renderWithTheme(<SocialMedia url={url} name={name} />)
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL, confirmation dialog, and showName', () => {
      testRenderer = renderWithTheme(
        <SocialMedia url={url} confirmation showName />
      )
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      expect(getTextContent(testRenderer)).toContain('Facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL, confirmation dialog, and icon', () => {
      testRenderer = renderWithTheme(
        <SocialMedia url={url} confirmation icon={icon} />
      )
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-brands')
      expect(iconClassName).toContain('fa-facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL, confirmation dialog, and name', () => {
      testRenderer = renderWithTheme(
        <SocialMedia url={url} confirmation name={name} />
      )
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL with no name but url instead', () => {
      testRenderer = renderWithTheme(<SocialMedia showName url={url} />)
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      expect(getTextContent(testRenderer)).toContain('Facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL and icon with tooltip', () => {
      testRenderer = renderWithTheme(
        <SocialMedia url={url} icon={icon} tooltip />
      )
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      const iconClassName = getFirstIconClassName(testRenderer)
      expect(iconClassName).toContain('fa-brands')
      expect(iconClassName).toContain('fa-facebook')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })

    test('renders with URL and icon with tooltip and name', () => {
      testRenderer = renderWithTheme(
        <SocialMedia url={url} name={'test'} icon={icon} showName />
      )
      expect(getAnchorHrefs(testRenderer)).toContain(url)
      expect(getTextContent(testRenderer)).toContain('test')
      expect(getStableSnapshot(testRenderer)).toMatchSnapshot()
    })
  })
})
