import './App.css';
import React from 'react';
import { UserContext } from "./contexts";
import { Button, ButtonGroup, Container, Typography, Link, Tooltip, Fab, Box, } from '@material-ui/core';
import { Backdrop, CircularProgress } from "@mui/material"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
//import ExpandMoreIcon from '@mui/icons/ExpandMore';

// Main Comps
import Portfolio from "./components/main/Portfolio"
import Home from "./components/main/Home"

// Comps
import Nav from "./components/Nav";
import Footer from './components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bg: {
    backgroundColor: "#161616",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "8px 5px 5px #111111"
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
  React.useEffect(() => { // this is makeshift
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 350)
  }, [state.focus])
  
  return (
    <div>
      <Container maxWidth="lg" className={classes.bg}>

        <Nav />
        {state.focus === "portfolio"
          ?
          <Portfolio />
          :
          <Home />
        }
        <br />
        {/* FOOTER */}
        <Grid container xs={12}>
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
    </div>
  );
}

export default App;
