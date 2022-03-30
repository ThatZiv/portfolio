import { Container, Grid, Typography, Slide, Grow, Fade, Avatar, Collapse, Zoom } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { useState, useRef } from "react";
import { indigo } from "@material-ui/core/colors";
import Delayed from "../Delayed";
import SocialMedia from "../SocialMedia";
import my from "../../sections";

const useStyles = makeStyles({
    root: {
        padding: 50
    },
    pic: {
        maxWidth: 400,
        maxHeight: "100%"
    }
})
export default function Home() {
    const classes = useStyles()
    const [isShown, setShown] = useState(false)
    const containerRef = useRef(null);
    setTimeout(() => setShown(true), 1000) // Only have one 'delayed' logic just so that justify content looks good and centered before send comp renders in
    return (<Grow in timeout={700}><div style={{ marginTop: 50 }}>
        <Grid container
            direction="row"
            justifyContent={isShown ? "space-evenly" : "center"}
            alignItems="center" xs={12}
            ref={containerRef}
        >
            {/*  xs={isShown ? 6 : 0} */}
            <Grid style={{ marginBottom: 10, paddingBottom: 5 }} sm={isShown ? 6 : 0} item>
                <Grow timeout={1200} in={isShown} mountOnEnter unmountOnExit>
                    <Typography style={{ fontFamily: "Blinker, sans-serif" }} variant="h3" component="div">Welcome.</Typography>
                </Grow>
                <Delayed wait={2500}>
                    <Slide timeout={750} direction="up" container={containerRef.current} in>
                        <Typography color="gray" variant="body1">My name is {my.name}.</Typography>
                    </Slide>
                </Delayed>
                <Delayed wait={3500}>
                    <Slide direction="right" timeout={1000} container={containerRef.current} in>
                        <Typography variant="subtitle1" >
                            {my.preamble}
                        </Typography>
                    </Slide>
                </Delayed>
                <Delayed wait={5000}>
                    <Fade in timeout={5000}>
                        <Grid container spacing={1}>
                            <Grid item>
                                <SocialMedia showName icon="envelope" name="Email" url="mailto:zavaar.shah123@gmail.com" />
                            </Grid>
                            <Grid item>
                                <SocialMedia showName url="https://www.linkedin.com/in/zavaar-shah" />
                            </Grid>
                            <Grid item>
                                <SocialMedia showName url="https://github.com/thatziv" />
                            </Grid>
                            <Grid item>
                                <SocialMedia showName icon="globe" name="Website" url="https://zavaar.net/" />
                            </Grid>
                        </Grid>
                    </Fade>
                </Delayed>
            </Grid>
            <Grid item>
                <Fade in timeout={500}>
                    <Avatar sx={{ width: 250, height: 250, bgcolor: indigo[800] }} className={"Media", classes.pic} alt="Zavaar Shah" src="/pics/me_clear.png" />
                </Fade>
            </Grid>
        </Grid>
    </div></Grow>)
}