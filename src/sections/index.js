import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import theme from "../Theme"
import { Divider, Grid, Link, Tooltip } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const parseTopicFromURL = (url) => { // works only for img.shields.to badges
    try {
        let _url = new URL(url)
        return _url.searchParams.get('logo')
    } catch (e) {
        return null
    }
}

const TabMenu = (props) => {
    const [value, setValue] = React.useState(0);
    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const TabEntry = (props) => {
        return <Box sx={{ padding: 2 }}>
            <div value={value} index={props.index}>
                {props.children}
            </div>
        </Box>
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                aria-label="Skill Tabs"
            >
                <Tab value={0} label="Languages" />
                <Tab value={1} label="Frameworks & Libraries" />
                <Tab value={2} label="Tools" />
            </Tabs>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                interval={10000}
                onChangeIndex={handleChangeIndex}
            >
                <TabEntry index={0}>
                    <Grid container
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}>
                        <Grid item container sm spacing={1}>
                            {my.langs.primary.map((val, index) => {
                                var topic = parseTopicFromURL(val)
                                return <Grid item>
                                    <Tooltip title={topic}>
                                        <Link href={`https://google.com/search?q=${topic}`}>
                                            <img alt={`primary lang ${index} ${topic}`} src={val} />
                                        </Link>
                                    </Tooltip>
                                </Grid>
                            })}
                        </Grid>
                    </Grid>
                </TabEntry>
                <TabEntry index={1}>
                    <Grid container spacing={1}>
                        {my.langs.secondary.map((val, index) => {
                            var topic = parseTopicFromURL(val)
                            return <Grid item>
                                <Tooltip title={topic}>
                                    <Link href={`https://google.com/search?q=${topic}`}>
                                        <img alt={`secondary lang ${index} ${topic}`} src={val} />
                                    </Link>
                                </Tooltip>
                            </Grid>
                        })}
                    </Grid>
                </TabEntry>
                <TabEntry index={2}>
                    <Grid container
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}>
                        <Grid item sm>
                            <img alt="tools" src={`https://skillicons.dev/icons?i=${my.tools.primary}&perline=6`} />
                        </Grid>
                        <Grid item container sm spacing={1}>
                            {my.tools.secondary.map((val, index) => {
                                return <Grid item><img alt={`secondary tool ${index}`} src={val} /></Grid>
                            })}
                        </Grid>
                    </Grid>
                </TabEntry>
            </AutoPlaySwipeableViews>
        </Box>
    );
}

// static data here
const my = {
    "preamble": `A passionate computer science student at 
    Wayne State University who seeks to employ innovative 
    new technologies and methodologies in the workplace.`,
    "name": "Zavaar Shah",
    "langs": {
        primary: [
            "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
            "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white",
            "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
            "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
            "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
            "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
            "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
            "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white",
            "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
            "https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white"
        ],
        secondary: [ // these are frameworks
            "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
            "https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white",
            "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
            "https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white",
            "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
            "https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9",
            "https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white",
            "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
            "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
            "https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white",
            "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
            "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
            "https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white",
            "https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white",
            "https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white",
            "https://img.shields.io/badge/Node--Red-8F0000?style=for-the-badge&logo=nodered&logoColor=white",
            "https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black",
        ]
    },
    "tools": {
        primary: "vscode,visualstudio,vim,neovim,atom,idea,arduino,blender,cloudflare,linux,docker,github,git,heroku,mongodb,mysql,nginx,raspberrypi,regex,selenium,ae,au,ai,pr,ps",
        secondary: [
            "https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white",
            "https://img.shields.io/badge/freebsd-AB2B28?style=for-the-badge&logo=freebsd&logoColor=white",
            "https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white",
            "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
            "https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white",
            "https://img.shields.io/badge/tmux-1BB91F?style=for-the-badge&logo=tmux&logoColor=white",
            "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white",
            "https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white",
            "https://img.shields.io/badge/Nextcloud-0082C9?style=for-the-badge&logo=Nextcloud&logoColor=white",
            "https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white",
            "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
            "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white",
            "https://img.shields.io/badge/Xampp-F37623?style=for-the-badge&logo=xampp&logoColor=white",
            "https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white",
            "https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=GitHub%20Pages&logoColor=white",
        ]
    },
    "skills": TabMenu
}

export default my;