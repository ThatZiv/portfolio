import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { HashRouter as Router } from 'react-router-dom'

import theme from './Theme'
//ctx
import { UserProvider } from './contexts'
import { ViewportProvider } from './contexts/viewport' // will be used in the future
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <ViewportProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </StyledEngineProvider>
      </ViewportProvider>
    </UserProvider>
  </React.StrictMode>
)

console.log(`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\`\` Welcome \`\`\`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
\`\`                          \`\`
\`\`                          \`\`
\`\`         \`\`\`\`\`\`\`\`\`\`       \`\`
\`\`        \`      \`\`\`        \`\`
\`\`             \`\`\`          \`\`
\`\`            \`\`\`           \`\`
\`\`                          \`\`
\`\`         \`\`\`              \`\`
\`\`        \`\`\`      \`        \`\`
\`\`       \`\`\`\`\`\`\`\`\`\`         \`\`
\`\`                          \`\`
\`\`                          \`\`
\`\`                          \`\`
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\` to my site \`\`\`\`\`\`\`\`\`
\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`
`)

// eslint-disable-next-line no-undef
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('/service-worker.js')
}

if (import.meta.env.DEV && window.location.search.includes('vitals')) {
  reportWebVitals(console.log)
}
