import React from 'react'
import TestRenderer from 'react-test-renderer'
import SocialMedia from '../components/SocialMedia'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

const { collectTrimmedText } = require('./test-utils')

describe('SocialMedia', () => {
  const icon = 'fs-brands fa-facebook'
  const url = 'https://www.facebook.com'
  const name = 'Facebook'

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders with only URL', () => {
    const urlOnly = 'https://example.com'
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={urlOnly} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(urlOnly)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-example')
    expect(iconClassName).toContain('fa-brands')
  })

  test('renders service when both icon and name are provided', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} icon={icon} name={name} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-solid')
    expect(iconClassName).toContain('fa-facebook')
  })

  test('renders with URL and icon', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} icon={icon} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-brands')
    expect(iconClassName).toContain('fa-facebook')
  })

  test('renders with URL and name', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} name={name} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-facebook')
  })

  test('renders with URL, confirmation dialog, and showName', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} confirmation showName />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const textContent = collectTrimmedText(testRenderer.toJSON())
    expect(textContent).toContain('Facebook')
  })

  test('renders with URL, confirmation dialog, and icon', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} confirmation icon={icon} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-brands')
    expect(iconClassName).toContain('fa-facebook')
  })

  test('renders with URL, confirmation dialog, and name', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} confirmation name={name} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-facebook')
  })

  test('renders with URL with no name but url instead', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia showName url={url} />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const textContent = collectTrimmedText(testRenderer.toJSON())
    expect(textContent).toContain('Facebook')
  })

  test('renders with URL and icon with tooltip', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} icon={icon} tooltip />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const iconClassName = testRenderer.root.findByType('i').props.className
    expect(iconClassName).toContain('fa-brands')
    expect(iconClassName).toContain('fa-facebook')
  })

  test('renders with URL and icon with tooltip and name', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <SocialMedia url={url} name={'test'} icon={icon} showName />
      </ThemeProvider>
    )
    const hrefs = testRenderer.root
      .findAllByType('a')
      .map((node) => node.props.href)
    expect(hrefs).toContain(url)
    const textContent = collectTrimmedText(testRenderer.toJSON())
    expect(textContent).toContain('test')
  })
})
