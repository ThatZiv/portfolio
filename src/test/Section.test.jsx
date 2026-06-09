import React from 'react'
import TestRenderer from 'react-test-renderer'
import Section from '../components/Section'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'
import { MemoryRouter } from 'react-router-dom'

describe('Section', () => {
  test('renders with multiple children', () => {
    const heading = 'Multi Child Section'
    const icon = 'fs-brands fa-facebook'
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[`/?${heading}=true`]}>
          <Section title={heading} icon={icon}>
            <div>Child 1</div>
            <div>Child 2</div>
          </Section>
        </MemoryRouter>
      </ThemeProvider>
    )
    const json = testRenderer.toJSON()
    expect(json).not.toBeNull()
    testRenderer.unmount()
  })

  test('renders with empty children', () => {
    const heading = 'Empty Section'
    const icon = 'fs-brands fa-facebook'
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[`/?${heading}=true`]}>
          <Section title={heading} icon={icon}>
            {null}
          </Section>
        </MemoryRouter>
      </ThemeProvider>
    )
    const json = testRenderer.toJSON()
    expect(json).not.toBeNull()
    testRenderer.unmount()
  })
})
