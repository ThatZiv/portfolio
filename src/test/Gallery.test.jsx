import React from 'react'
import TestRenderer from 'react-test-renderer'
import Gallery from '../components/Gallery'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../Theme'

describe('Gallery', () => {
  test('renders single image', () => {
    const images = [
      {
        label: 'Single Image',
        imgPath: 'https://picsum.photos/200/300'
      }
    ]
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Gallery images={images} />
      </ThemeProvider>
    )
    const imageNodes = testRenderer.root.findAllByType('img')
    expect(imageNodes).toHaveLength(1)
    expect(imageNodes[0].props.alt).toBe('Single Image')
    expect(imageNodes[0].props.src).toBe('https://picsum.photos/200/300')
    testRenderer.unmount()
  })

  test('renders images with custom styles', () => {
    const images = [
      {
        label: 'Styled Image',
        imgPath: 'https://picsum.photos/200/300'
      }
    ]
    const testRenderer = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <Gallery images={images} style={{ border: '1px solid red' }} />
      </ThemeProvider>
    )
    const imageNodes = testRenderer.root.findAllByType('img')
    expect(imageNodes).toHaveLength(1)
    testRenderer.unmount()
  })
})
