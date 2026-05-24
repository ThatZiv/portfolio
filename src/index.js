import React from 'react'
import ReactDOM from 'react-dom'
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
ReactDOM.render(
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
  </React.StrictMode>,
  document.getElementById('root')
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
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('/service-worker.js')
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
