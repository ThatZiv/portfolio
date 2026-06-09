import React from 'react'
import TestRenderer from 'react-test-renderer'
import Timeline from '../components/Timeline'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

const { collectTrimmedText } = require('./test-utils')

describe('Timeline', () => {
  const testData = [
    ['December 31, 1969', 'When clocks started to count up!'],
    ['January 1, 1970', 'The day of reckoning...']
  ]
  const expectedItems = testData.flatMap(([date, event]) => [date, event])
  test('Checks timeline', () => {
    const timelineRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Timeline steps={testData} />
      </ThemeProvider>
    )
    const textValues = collectTrimmedText(timelineRenderer.toJSON())
    expectedItems.forEach((item) => {
      expect(textValues).toContain(item)
    })
  })

  test('renders step count', () => {
    const timelineRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Timeline steps={testData} />
      </ThemeProvider>
    )
    const textValues = collectTrimmedText(timelineRenderer.toJSON())
    testData.forEach(([date]) => {
      const matches = textValues.filter((value) => value === date)
      expect(matches).toHaveLength(1)
    })
  })
})
