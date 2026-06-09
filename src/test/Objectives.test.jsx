import React from 'react'
import TestRenderer from 'react-test-renderer'
import Objectives from '../components/Objectives'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

const { collectTrimmedText } = require('./test-utils')

describe('Objectives', () => {
  test('renders objectives list', () => {
    const objectives = 'One|Two|Three|Four|Five'
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Objectives list={objectives} />
      </ThemeProvider>
    )
    const textValues = collectTrimmedText(testRenderer.toJSON())
    const expected = objectives.split('|')
    expected.forEach((objective) => {
      expect(textValues).toContain(objective)
    })
  })
})
