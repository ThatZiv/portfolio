import { Container, Grid, Typography, Slide, Grow, Fade, Avatar } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import { indigo } from "@material-ui/core/colors";

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
    setTimeout(() => setShown(true), 1000)
    return (<Grow in timeout={700}><div style={{marginTop: 50}}>
        <Grid container
            direction="row"
            justifyContent={isShown ? "space-evenly" : "center"}
            alignItems="center" xs={12}>
            <Grid item>
                <Grow timeout={1200} direction="down" in={isShown} mountOnEnter unmountOnExit>
                    <Typography variant="h3">Welcome.</Typography>
                </Grow>

            </Grid>
            <Grid item>
                <Fade in timeout={500}>
                    <Avatar sx={{ width: 250, height: 250, bgcolor: indigo[800] }} className={"Media", classes.pic} alt="Zavaar Shah" src="/pics/me_clear.png" />
                </Fade>
            </Grid>
        </Grid>
    </div></Grow>)
}