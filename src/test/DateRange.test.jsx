import React from 'react'
import TestRenderer from 'react-test-renderer'
import DateRange from '../components/DateRange'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

describe('DateRange', () => {
  const testData = [
    ['December 31, 1969', 'When clocks started to count up!'],
    ['January 1, 1970', 'The day of reckoning...']
  ]

  test('Checks date range (ongoing)', () => {
    const dateRangeIncomplete = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <DateRange complete={false} timeline={testData} />
      </ThemeProvider>
    )
    const dateRangeJson = dateRangeIncomplete.toJSON()
    expect(dateRangeJson).not.toBeNull()
    expect(dateRangeJson?.children?.[0]).toBe('1969 - Now')
  })

  test('Checks full date range (completed)', () => {
    const dateRangeCompleted = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <DateRange complete={true} timeline={testData} />
      </ThemeProvider>
    )
    const dateRangeJson = dateRangeCompleted.toJSON()
    expect(dateRangeJson).not.toBeNull()
    expect(dateRangeJson?.children?.[0]).toBe('1969 - 1970')
  })
})
