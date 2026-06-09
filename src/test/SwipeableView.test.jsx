import React from 'react'
import TestRenderer from 'react-test-renderer'
import SwipeableView from '../components/SwipeableView'

describe('SwipeableView', () => {
  test('does nothing when onChangeIndex is not provided', () => {
    const testRenderer = TestRenderer.create(
      <SwipeableView index={0} interval={1000}>
        <div>Item 1</div>
        <div>Item 2</div>
      </SwipeableView>
    )
    expect(testRenderer.toJSON()).not.toBeNull()
  })

  test('does nothing when count is 1', () => {
    const testRenderer = TestRenderer.create(
      <SwipeableView index={0} onChangeIndex={() => {}}>
        <div>Only item</div>
      </SwipeableView>
    )
    expect(testRenderer.toJSON()).not.toBeNull()
  })

  test('auto-advances when interval is provided', (done) => {
    const handleChangeIndex = jest.fn()
    const testRenderer = TestRenderer.create(
      <SwipeableView index={0} onChangeIndex={handleChangeIndex} interval={100}>
        <div>Item 1</div>
        <div>Item 2</div>
      </SwipeableView>
    )

    setTimeout(() => {
      expect(handleChangeIndex).toHaveBeenCalled()
      testRenderer.unmount()
      done()
    }, 150)
  })

  test('handles x-reverse axis correctly', () => {
    const testRenderer = TestRenderer.create(
      <SwipeableView index={1} axis="x-reverse" onChangeIndex={() => {}}>
        <div>Item 1</div>
        <div>Item 2</div>
      </SwipeableView>
    )
    expect(testRenderer.toJSON()).not.toBeNull()
  })

  test('handles mouse events when enabled', () => {
    const testRenderer = TestRenderer.create(
      <SwipeableView index={0} enableMouseEvents onChangeIndex={() => {}}>
        <div>Item 1</div>
        <div>Item 2</div>
      </SwipeableView>
    )
    expect(testRenderer.toJSON()).not.toBeNull()
  })
})
