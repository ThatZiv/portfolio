import React from 'react'
import { useSwipeable } from 'react-swipeable'

const getNextIndex = (index, count) => (index + 1 >= count ? 0 : index + 1)
const getPrevIndex = (index, count) => (index - 1 < 0 ? count - 1 : index - 1)

export default function SwipeableView(props) {
  const {
    index = 0,
    onChangeIndex,
    interval,
    enableMouseEvents = false,
    axis = 'x',
    children,
    className,
    style,
    transitionDuration = 300
  } = props

  const items = React.Children.toArray(children)
  const count = items.length
  const safeCount = count || 1
  const direction = axis === 'x-reverse' ? 1 : -1

  const handleNext = React.useCallback(() => {
    if (!onChangeIndex || count <= 1) {
      return
    }
    onChangeIndex(getNextIndex(index, count))
  }, [onChangeIndex, index, count])

  const handlePrev = React.useCallback(() => {
    if (!onChangeIndex || count <= 1) {
      return
    }
    onChangeIndex(getPrevIndex(index, count))
  }, [onChangeIndex, index, count])

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => (axis === 'x-reverse' ? handlePrev() : handleNext()),
    onSwipedRight: () => (axis === 'x-reverse' ? handleNext() : handlePrev()),
    trackMouse: enableMouseEvents,
    preventScrollOnSwipe: true
  })

  React.useEffect(() => {
    if (!interval || !onChangeIndex || count <= 1) {
      return
    }
    const timeoutId = setTimeout(handleNext, interval)
    return () => clearTimeout(timeoutId)
  }, [interval, handleNext, onChangeIndex, count])

  return (
    <div
      {...swipeHandlers}
      className={className}
      style={{ overflow: 'hidden', width: '100%', ...style }}
    >
      <div
        style={{
          display: 'flex',
          width: `${safeCount * 100}%`,
          transform: `translateX(${direction * index * (100 / safeCount)}%)`,
          transition: `transform ${transitionDuration}ms ease`
        }}
      >
        {items.map((child, idx) => (
          <div
            key={child.key ?? idx}
            style={{ flex: `0 0 ${100 / safeCount}%` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
