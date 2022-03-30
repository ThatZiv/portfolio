import React from 'react';
import { UserContext } from "../contexts"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import { Avatar, ListItem, List, Container, Divider, Button, Grid, Link, Badge, Slide } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import preval from 'preval.macro';
import SocialMedia from "./SocialMedia";
import Status from './Status';
import { capFirstLetter } from '../utils';
const dateCompiled = preval(`module.exports = new Date().toLocaleDateString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });`)


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.dark, 0.15), // CHANGE THIS
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

var thisUrl = ""
const SearchAppBar = (props) => {
    const [drawer, setDrawer] = React.useState(false)
    const [found, setFound] = React.useState(0)
    const [state, dispatch] = React.useContext(UserContext)
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    };
    const goSearch = (e) => { // on enter
        if (e.key === 'Enter') {
            window.location.href = "#" + thisUrl
        }
    }
    const doSearch = (e) => {
        setFound(0);
        let query = e.target.value
        const allTags = document.querySelectorAll(".MuiChip-colorPrimary .MuiChip-label") // all tags
        const defaultStyle = allTags[0].style
        if (query?.length) {
            allTags.forEach((node) => {
                node.style = defaultStyle // to reset
                if (node.innerHTML?.toLowerCase().includes(query.toLowerCase())) {
                    node.style = "background-color: #c2a800;display: table;";
                    setFound(_found => _found + 1);
                    thisUrl = node.innerHTML
                    //window.find(query) // TODO: make this actually good (atleast make it not stop typing after it found something)
                }
            })
        } else {
            allTags.forEach((node) => {
                node.style = defaultStyle // reset all values [redundant]
            })
        }
    }
    /*  // FOR QOTD
        fetch("https://zenquotes.io/api?api=today", { mode: "no-cors",headers: {"Access-Control-Allow-Origin": "*"} })
            .then(data => data.json).then(json=> {...}) */

    // http://jsfiddle.net/wjLmx/23/ <- SEARCH FUNCTION
    return (
        <Slide direction="down" in mountOnEnter unmountOnExit>
            <div>
                <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
                    <Container>
                        <List>
                            <br />
                            <Grid container >
                                <Grid item>
                                    <Stack direction="row" spacing={2}>
                                        <Status dot pattern='/\"Zua\"/g'
                                            url="https://discord.com/api/guilds/406653822929207298/widget.json">
                                            <Avatar sx={{ width: 50, height: 50 }} alt="me" src="/pics/me.jfif"></Avatar>
                                        </Status>
                                        <br />
                                        <br />
                                    </Stack></Grid>
                                <Grid item>
                                    <Typography variant="h4" style={{ fontFamily: "Arvo, sans-serif", color: "whitesmoke" }}>&nbsp;&nbsp;Zavaar Shah</Typography>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                            <Typography style={{ fontStyle: "italic" }} variant="body2" sx={{ "width": 300 }}>
                                Passionate computer science student at Wayne State University who seeks to employ innovative new technologies
                                and methodologies in the workplace.
                            </Typography>
                            <br />
                            <Grid container spacing={1}>
                                <Grid item>
                                    <SocialMedia icon="envelope" name="Email" url="mailto:zavaar.shah123@gmail.com" />
                                </Grid>
                                <Grid item>
                                    <SocialMedia url="https://www.linkedin.com/in/zavaar-shah" />
                                </Grid>
                                <Grid item>
                                    <SocialMedia url="https://github.com/thatziv" />
                                </Grid>
                                <Grid item>
                                    <SocialMedia icon="globe" name="Website" url="https://zavaar.net/" />
                                </Grid>
                            </Grid>
                        </List>
                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            textAlign: "left",
                            maxWidth: 250,
                            color: "#575757",
                            fontStyle: "italic",
                        }}>
                            <Typography variant="subtitle2">
                                Last updated on {dateCompiled}
                            </Typography>
                        </div>
                    </Container>
                </Drawer>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h3"
                                noWrap
                                component="div"
                                style={{ fontFamily: "Teko, sans-serif" }}
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                {capFirstLetter(state.focus)}
                            </Typography>
                            <MenuItem key="Home" onClick={() => dispatch({ type: "UI_nav", focus: "home" })}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem key="Portfolio" onClick={() => dispatch({ type: "UI_nav", focus: "portfolio" })}>
                                <Typography textAlign="center">Portfolio</Typography>
                            </MenuItem>
                            {/* <Button>
                            <Avatar onClick={toggleDrawer(true)} sx={{ width: 24, height: 24 }} src="/main.png"></Avatar>
                        </Button> */}
                            {state.focus === "portfolio" && <Search onChange={doSearch} onKeyUp={goSearch}>
                                <SearchIconWrapper>
                                    <Badge color="secondary" badgeContent={found}>
                                        <SearchIcon />
                                    </Badge>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search Tags…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>}

                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </Slide>
    );
}

export default SearchAppBar