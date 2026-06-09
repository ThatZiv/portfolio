import React from 'react'
import TestRenderer from 'react-test-renderer'
import Footer from '../components/Footer'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

const { collectTrimmedText } = require('./test-utils')

describe('Footer', () => {
  test('renders footer with copyright year', () => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )
    const el = testRenderer.toJSON()
    const textValues = collectTrimmedText(el)
    expect(textValues.join(' ')).toContain(
      `© ${new Date().getFullYear()} Zavaar Shah`
    )
  })
})
