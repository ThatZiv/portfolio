import React from 'react'
import TestRenderer from 'react-test-renderer'
import { ViewportProvider } from '../contexts/viewport'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

describe('ViewportProvider', () => {
  test('provides width and height context', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <ViewportProvider>
          <div data-testid="viewport-test">Test</div>
        </ViewportProvider>
      </ThemeProvider>
    )
    expect(testRenderer.toJSON()).not.toBeNull()
  })
})
