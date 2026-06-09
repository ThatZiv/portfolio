import './App.css'
import React from 'react'
import { UserContext } from './contexts'
import Container from '@mui/material/Container'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { capFirstLetter } from './utils'
import {
  Route,
  Routes,
  Navigate as Redirect,
  useLocation
} from 'react-router-dom'

// Comps
const Nav = React.lazy(() => import('./components/Nav'))
const Footer = React.lazy(() => import('./components/Footer'))
const AlertDialog = React.lazy(() => import('./components/AlertDialog'))
const BackdropProgress = React.lazy(() =>
  import('./components/BackdropProgress')
)

import pages from './pages/index'

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
    const focus = location.pathname.split('/').pop() || 'home'
    dispatch({
      type: 'UI_nav',
      focus
    }) // dispatch usage SHOULD deprecated now
    document.title = capFirstLetter(focus) + ' | Zavaar Shah'
    if (window.gtag) {
      window.gtag('event', 'page_view', { page_path: '/' + focus })
    }
    // setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 300)
  }, [location, dispatch])
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
