import React from 'react'
import TestRenderer from 'react-test-renderer'
import Tags from '../components/Tags'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

const { collectTrimmedText } = require('./test-utils')

describe('Tags', () => {
  test('renders tags with content', () => {
    const testContent = 'Test-Driven Development'
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Tags>{testContent}</Tags>
      </ThemeProvider>
    )
    const textValues = collectTrimmedText(testRenderer.toJSON())
    expect(textValues).toContain(testContent)
  })
})
