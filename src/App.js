import './App.css';
import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Typography, Link, Tooltip, Fab } from '@material-ui/core';
import MediaCard from "./components/MediaCard"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
//import ExpandMoreIcon from '@mui/icons/ExpandMore';
// Comps
import Nav from "./components/Nav";
import Section from './components/Section';
import Footer from './components/Footer';
import Status from './components/Status';

// Content
import Jeva from './sections/Jeva';
import FiveM from './sections/FiveM';
import Webserver from './sections/Webserver';
import Garage from './sections/Garage';

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
  listView: {
    width: '100%',
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    padding: theme.spacing(2),
  }
}));

function App() {
  const classes = useStyles();
  const [focus, setFocus] = useState(null) // null is home
  return (
    <Container maxWidth="lg" className={classes.bg}>
      <Nav />
      {/* <h2>THE PORTFOLIO OF ZAVAAR</h2> */}
      <Divider />

      <Grid
        justifyContent="flex-start"
        style={{ marginTop: "10px" }}
        container spacing={2}>
        {/* JEVA */}
        <MediaCard {...Jeva.meta}>
          <Section icon="fa-solid fa-chart-line" title="Statistics">
            <Jeva.components.statistics />
          </Section>
          <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
            <Jeva.components.links />
          </Section>
        </MediaCard>
        {/* FIVEM BOT */}
        <MediaCard {...FiveM.meta}>
          <Section icon="fa-solid fa-chart-line" title="Statistics">
            <FiveM.components.statistics />
          </Section>
          <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
            <FiveM.components.links />
          </Section>
        </MediaCard>
        {/* Garage */}
        <MediaCard {...Garage.meta}>
          <Section icon="fa-solid fa-images" title="Gallery">
            <Garage.components.pictures />
          </Section>
          <Section icon="fa-solid fa-chart-line" title="Statistics">
            <Garage.components.statistics />
          </Section>
        </MediaCard>
        {/* WEBSERVER */}
        <MediaCard {...Webserver.meta}>
          <Section icon="fa-solid fa-chart-line" title="Statistics">
            <Webserver.components.statistics />
          </Section>
          <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
            <Webserver.components.links />
          </Section>
        </MediaCard>
      </Grid>
      {/* FOOTER */}
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
