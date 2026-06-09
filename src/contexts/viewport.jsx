import React from 'react'

const viewportContext = React.createContext({})

// Simple debounce utility
function debounce(fn, ms) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [height, setHeight] = React.useState(window.innerHeight)

  const handleWindowResize = React.useCallback(
    debounce(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 150),
    []
  )

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [handleWindowResize])

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height } = React.useContext(viewportContext)
  return { width, height }
}
