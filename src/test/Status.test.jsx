import React from 'react'
import TestRenderer from 'react-test-renderer'
import Status from '../components/Status'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import { green, red } from '@mui/material/colors'
import { collectTrimmedText } from './test-utils'

const { act } = TestRenderer

describe('Status', () => {
  let url = 'https://www.google.com'
  const pattern = 'google'

  afterEach(() => {
    jest.clearAllMocks()
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        text: () => Promise.resolve('<html><title>google</title></html>'),
        json: () => Promise.resolve({ data: '12345' })
      })
    })
  })

  test('renders status CARD correctly', async () => {
    // eslint-disable-next-line no-undef
    global.fetch = jest.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve('<html><title>google</title></html>')
      })
    )
    let testRenderer
    await act(async () => {
      testRenderer = TestRenderer.create(
        <ThemeProvider theme={theme}>
          <Status url={url} pattern={pattern} paper={true} />
        </ThemeProvider>
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
  })

  test("renders status CARD correctly when it's offline", async () => {
    jest
      // eslint-disable-next-line no-undef
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() =>
        Promise.reject(new Error('Failed to fetch'))
      )
    let testRenderer
    await act(async () => {
      testRenderer = TestRenderer.create(
        <ThemeProvider theme={theme}>
          <Status url={url} pattern={pattern} paper={true} />
        </ThemeProvider>
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
  })

  test('renders status DOT correctly', async () => {
    let testRenderer
    await act(async () => {
      testRenderer = TestRenderer.create(
        <ThemeProvider theme={theme}>
          <Status url={url} pattern={pattern} dot={true}>
            <span>Badge</span>
          </Status>
        </ThemeProvider>
      )
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    const textContent = collectTrimmedText(testRenderer.toJSON())
    expect(textContent).toContain('Badge')
    const badgeNodes = testRenderer.root.findAll(
      (node) =>
        typeof node.props?.className === 'string' &&
        node.props.className.includes('MuiBadge-root')
    )
    expect(badgeNodes.length).toBeGreaterThan(0)
  })

  test("renders status DOT correctly when it's offline", async () => {
    jest
      // eslint-disable-next-line no-undef
      .spyOn(global, 'fetch')
      .mockImplementationOnce(() =>
        Promise.reject(new Error('Failed to fetch'))
      )
    let testRenderer
    await act(async () => {
      testRenderer = TestRenderer.create(
        <ThemeProvider theme={theme}>
          <Status url={url} pattern={pattern} dot={true}>
            <span>Badge</span>
          </Status>
        </ThemeProvider>
      )
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    const textContent = collectTrimmedText(testRenderer.toJSON())
    expect(textContent).toContain('Badge')
    const badgeNodes = testRenderer.root.findAll(
      (node) =>
        typeof node.props?.className === 'string' &&
        node.props.className.includes('MuiBadge-root')
    )
    expect(badgeNodes.length).toBeGreaterThan(0)
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
      TestRenderer.create(
        <ThemeProvider theme={theme}>
          <Status url={url} pattern={null} paper={true} />
        </ThemeProvider>
      )
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
  })
})
