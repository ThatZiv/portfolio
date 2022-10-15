import './App.css';
import React from 'react';
import { UserContext } from "./contexts";
import { Button, ButtonGroup, Container, Typography, Link, Tooltip, Fab, Box, } from '@material-ui/core';
import { Backdrop, CircularProgress } from "@mui/material"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { capFirstLetter } from './utils';
import ReactGA from "react-ga";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate as Redirect,
  useNavigate as useHistory
} from "react-router-dom";

// Main pages
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home"

// Comps
import Nav from "./components/Nav";
import Footer from './components/Footer';
import AlertDialog from './components/AlertDialog';
import pages from './pages';


// Google Analytics
const TRACKING_ID = "G-48EJRL7D42";
ReactGA.initialize(TRACKING_ID);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: "#161616",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "1px 1px 1px rgba(11,11,11,25)"
  },
  heading: {
    fontSize: theme.typography.pxToRem(23),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function App() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false)
  const [state, dispatch] = React.useContext(UserContext)
  const [dialog, setDialog] = React.useState()
  React.useEffect(() => { // this is makeshift
    document.title = capFirstLetter(state.focus) + " | Zavaar Shah"
    ReactGA.pageview("/" + state.focus)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 340)
  }, [state.focus]) // TODO: convert this preloader onto new routing method

  React.useEffect(() => {
    setDialog(state.dialog)
  }, [state.dialog])
  return (
    <Router>
      <div>
        <Container maxWidth="lg" className={classes.bg}>

          <Nav />
          {/* Main container */}
          <Routes>
            {pages.map(({ label, location, component, href }) =>
              <Route path={location} element={href ? <Redirect push to={href} /> : component} />
            )}
            <Route path="/" element={Home}/>
          </Routes>
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
        <AlertDialog open={state.dialog?.open} callback={state.dialog?.callback} title={state.dialog?.title}>{state.dialog?.content}</AlertDialog>
      </div>
    </Router>
  );
}

export default App;
