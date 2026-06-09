import React from 'react'
import TestRenderer from 'react-test-renderer'
import YouTubeEmbed from '../components/YouTubeEmbed'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

describe('YouTubeEmbed', () => {
  test('renders iframe with correct src and title', () => {
    const id = 'dQw4w9WgXcQ'
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <YouTubeEmbed id={id} />
      </ThemeProvider>
    )
    const iframe = testRenderer.root.findByType('iframe')
    expect(iframe.props.src).toBe(
      `https://www.youtube-nocookie.com/embed/${id}`
    )
    expect(iframe.props.title).toBe(id)
  })
})
