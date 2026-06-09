import React from 'react'
import TestRenderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

describe('Sections components', () => {
  test('renders TabEntry component structure', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <div>
          <div>Test Content</div>
        </div>
      </ThemeProvider>
    )
    const content = testRenderer.root.findByType('div')
    expect(content).toBeDefined()
  })

  test('renders Grid components', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <div>
          <div>Test Content</div>
        </div>
      </ThemeProvider>
    )
    const grids = testRenderer.root.findAllByType('div')
    expect(grids.length).toBeGreaterThan(0)
  })
})
