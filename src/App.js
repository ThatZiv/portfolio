import './App.css'
import React from 'react'
import { UserContext } from './contexts'
import { Container } from '@material-ui/core'
import { Backdrop, CircularProgress } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { capFirstLetter } from './utils'
import ReactGA from 'react-ga'
import {
  Route,
  Routes,
  Navigate as Redirect,
  useLocation
} from 'react-router-dom'

/* // Main pages
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home" */

// Comps
import Nav from './components/Nav'
import Footer from './components/Footer'
import AlertDialog from './components/AlertDialog'
import BackdropProgress from './components/BackdropProgress'

import pages from './pages/index.js'

// component pre-loader (react.lazy)
/* var preloadedPages = {}
pages.map(({ label, component }) => preloadedPages[label] = React.lazy(() => import(component)))
console.log(preloadedPages) */
// Google Analytics
const TRACKING_ID = 'G-48EJRL7D42'
ReactGA.initialize(TRACKING_ID)

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  bg: {
    backgroundColor: '#161616',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '1px 1px 1px rgba(11,11,11,25)'
  },
  heading: {
    fontSize: theme.typography.pxToRem(23),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

function App() {
  const classes = useStyles()
  const [loading] = React.useState(false)
  const [state, dispatch] = React.useContext(UserContext)
  const [, setDialog] = React.useState()
  const location = useLocation()
  React.useEffect(() => {
    dispatch({
      type: 'UI_nav',
      focus: location.pathname.split('/').pop() || 'home'
    }) // dispatch usage SHOULD deprecated now
    document.title = capFirstLetter(state.focus) + ' | Zavaar Shah'
    ReactGA.pageview('/' + state.focus)
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 300)
  }, [location, state.focus])
  React.useEffect(() => {
    setDialog(state.dialog)
  }, [state.dialog])
  return (
    <div>
      <Container maxWidth="lg" className={classes.bg}>
        <Nav />
        {/* Main container */}
        <React.Suspense fallback={<BackdropProgress />}>
          <Routes>
            {pages.map(({ label, location, component, href }) => (
              <Route
                path={location}
                key={label}
                element={
                  href ? (
                    <Redirect push to={href} />
                  ) : (
                    React.createElement(component)
                  )
                }
              />
            ))}
            <Route path="*" element={<Redirect to="/" />} />
          </Routes>
        </React.Suspense>
        <br />
        {/* FOOTER */}
        <Grid container>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <AlertDialog
        open={state.dialog?.open}
        callback={state.dialog?.callback}
        title={state.dialog?.title}
      >
        {state.dialog?.content}
      </AlertDialog>
    </div>
  )
}

export default App
