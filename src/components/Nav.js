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
import { Avatar, ListItem, List, Container, Divider, Button, Grid, Badge, Slide, makeStyles, ButtonGroup, Tooltip } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EastIcon from '@mui/icons-material/East';
import StartIcon from '@mui/icons-material/Start';
import Stack from '@mui/material/Stack';
import preval from 'preval.macro';
import SocialMedia from "./SocialMedia";
import my from "../sections"
import Status from './Status';
import { capFirstLetter } from '../utils';
import Section from './Section';
import pages from '../pages';
import { Link, useLocation } from 'react-router-dom';
import { Launch } from '@mui/icons-material';
const dateCompiled = preval(`module.exports = new Date().toLocaleDateString(undefined,{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });`)

// TODO: this file is too big: split nav bar and drawer into two separate subcomponents.

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
        border: "0.35px solid gray",
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
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

const navItemStyling = { border: "2px dashed", borderRadius: 4, borderColor: "#393939" }
const navBarItemStyling = { fontWeight: 500 }

var thisUrl = ""
const SearchAppBar = (props) => {
    // const [page, setPage] = React.useState("/")
    const [drawer, setDrawer] = React.useState(false)
    const [found, setFound] = React.useState(0)
    const [state, dispatch] = React.useContext(UserContext)
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawer(open);
    };
    const goSearch = (e) => { // on tag search bar enter or that search button click
        if ((e.key === 'Enter' || e.type === "click") && thisUrl) {
            const targetTag = document.querySelector(`div[tag="${thisUrl}"].MuiChip-colorPrimary`)
            targetTag.scrollIntoView({ behavior: "smooth" })
        }
    }

    /*const location = useLocation();

     React.useEffect(() => {
        setPage(location.pathname.split("/").pop())
    }, [location]); */
    const doSearch = (e) => {
        setFound(0);
        let query = e.target.value
        const allTags = document.querySelectorAll("div[tag].MuiChip-colorPrimary") // all tags
        const defaultStyle = allTags[0].style
        if (query?.length) {
            allTags.forEach((node) => {
                node.style = defaultStyle // to reset
                if (node?.getAttribute("tag")?.toLowerCase().includes(query.toLowerCase().replace(" ", "_"))) { // this equates the potential tag name with the search query looking for tags
                    node.style = "background-color: #c2a800;";
                    setFound(_found => _found + 1);
                    thisUrl = node.getAttribute("tag")
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
                        <List key="descriptionMe">
                            <br />
                            <Grid container>
                                <Grid item>
                                    <Stack direction="row" spacing={2}>
                                        <Status dot pattern='/\"Zua\"/g'
                                            url="https://discord.com/api/guilds/406653822929207298/widget.json">
                                            <Avatar sx={{ width: 50, height: 50 }} alt="me" src="/pics/me_3_prof_bg_2.jpg" />
                                        </Status>
                                        <br />
                                        <br />
                                    </Stack></Grid>
                                <Grid item>
                                    <Typography variant="h4" style={{ fontFamily: "Arvo, sans-serif", color: "whitesmoke" }}>&nbsp;&nbsp;{my.name}</Typography>
                                </Grid>
                            </Grid>
                            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
                            <Typography style={{ fontStyle: "italic" }} variant="body2" sx={{ "width": 300 }}>
                                {my.preamble}
                            </Typography>
                            <br />
                            <Grid container spacing={1}>
                                <Grid item>
                                    <SocialMedia icon="envelope" name="Email" url="mailto:zavaar.shah123@gmail.com" />
                                </Grid>
                                <Grid item>
                                    <SocialMedia url="https://www.linkedin.com/in/zavaar-shah" confirmation />
                                </Grid>
                                <Grid item>
                                    <SocialMedia url="https://github.com/thatziv" confirmation />
                                </Grid>
                                <Grid item>
                                    <SocialMedia icon="globe" name="Website" url="https://zavaar.net/" confirmation />
                                </Grid>
                            </Grid>
                        </List>
                        {/* NAVIGATION (in drawer) */}
                        <Grid container>
                            <Grid item style={{ width: "94%" }}>
                                <ButtonGroup orientation="vertical"
                                    aria-label="vertical contained button group"
                                    variant="contained" style={{ width: "100%" }}>
                                    {pages.map(({ label, location, icon }) =>
                                        <Tooltip title={`Go to the "${label}" page`} placement="right-start">
                                            <Link style={{ textDecoration: "none", color: "white" }} onClick={() => { setDrawer(false) }} to={location}>
                                                <Button style={{ width: '100%' }} variant='text' key={`${label}_drawer`}>
                                                    <i className={icon} style={{ marginRight: 5 }}></i>{capFirstLetter(label)}
                                                </Button>
                                            </Link>
                                        </Tooltip>
                                    )}
                                </ButtonGroup>
                            </Grid>
                        </Grid>

                        <div style={{
                            position: "absolute",
                            bottom: 0,
                            textAlign: "left",
                            zIndex: -9999,
                            maxWidth: 275,
                            color: "#575757",
                            fontStyle: "italic",
                        }}>
                            <Typography style={{ fontSize: '0.95rem' }} variant="subtitle2">
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
                                sx={{ flexGrow: 1, display: { xs: state.focus === "home" ? "flex" : 'none', sm: 'block' } }}
                            >
                                {capFirstLetter(state.focus)}
                            </Typography>


                            {/* NAVIGATION (on navbar) */}
                            {/* style={{ display: { xs: 'none', sm: 'block' } }} */}

                            <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                                <Grid container justifyContent="flex-end">
                                    <ButtonGroup variant='outlined'>
                                        {pages.map(({ label, location, icon }) => (
                                            <Link style={{ textDecoration: "none", color: "white" }} to={location}>
                                                <Button key={`${label}_mainNav`}>
                                                    <i className={icon} style={{ marginRight: 3 }} />
                                                    <Typography style={navBarItemStyling} textAlign="center">{capFirstLetter(label)}</Typography>
                                                </Button>
                                            </Link>
                                        ))}
                                    </ButtonGroup>
                                </Grid>
                            </Box>

                            {/* <Button>
                            <Avatar onClick={toggleDrawer(true)} sx={{ width: 24, height: 24 }} src="/main.png"></Avatar>
                        </Button> */}
                            {state.focus !== "home" && <Search onChange={doSearch} onKeyUp={goSearch}>
                                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                    <SearchIconWrapper>
                                        <Badge color="secondary" badgeContent={found}>
                                            <SearchIcon />
                                        </Badge>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search Terms"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />

                                    <Button onClick={goSearch} variant='contained'><EastIcon /></Button>

                                </ButtonGroup>
                            </Search>}

                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
        </Slide >
    );
}

export default SearchAppBar