import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import theme from "../Theme"
import { Divider, Fade, Grid, Grow, Link, Tooltip } from '@material-ui/core';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const parseTopicFromURL = (url) => { // works only for img.shields.to badges
    try {
        let _url = new URL(url)
        return _url.pathname.replace("/badge/", '').split('-')[0]
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
    const ShieldsIoBadges = (props) => {
        return props.data.map((val, index) => {
            var topic = parseTopicFromURL(val)
            return <Grid item>
                <Tooltip title={decodeURIComponent(topic).replace('_', ' ')} target="_blank">
                    <Link href={`https://google.com/search?q=${topic}`}>
                        <img alt={`secondary lang ${index} ${topic}`} src={val} />
                    </Link>
                </Tooltip>
            </Grid>
        })
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                indicatorColor="primary"
                variant="scrollable"
                aria-label="Skill Tabs"
            >
                <Tab value={0} label="Languages" />
                <Tab value={1} label="Frameworks & Libraries" />
                <Tab value={2} label="Tools" />
            </Tabs>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} // FIXME: cant swipe right
                index={value}
                interval={8500}
                onChangeIndex={handleChangeIndex}
                enableMouseEvents
            >
                {/* Languages */}
                <TabEntry index={0}>
                    <Grid container
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}>
                        <Grid item container spacing={1}>
                            <ShieldsIoBadges data={my.langs.primary} />
                        </Grid>
                        <Divider />
                        <Grid item>
                            <Tooltip title="www.github.com/ThatZiv?tab=repositories">
                                <Link href="https://github.com/ThatZiv?tab=repositories" target="_blank">
                                    <Fade timeout={575} in mountOnEnter unmountOnExit>
                                        <img alt="top langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=thatziv&layout=compact&theme=dark&count_private=true&&langs_count=11&hide_border=true&bg_color=#121212&border_radius=3&show_owner=true" />
                                    </Fade>
                                </Link>
                            </Tooltip>
                        </Grid>
                        <Grid item>
                            <Tooltip title="www.github.com/ThatZiv">
                                <Link href="https://github.com/ThatZiv" target="_blank">
                                    <Fade timeout={575} in mountOnEnter unmountOnExit>
                                        <img alt="gh profile stats" src="https://github-readme-stats.vercel.app/api?username=thatziv&count_private=true&theme=dark&show_icons=true&hide_border=true&hide_rank=true&include_all_commits=true&bg_color=#121212&border_radius=3" />
                                    </Fade>
                                </Link>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </TabEntry>
                {/* Frameworks & Libraries */}
                <TabEntry index={1}>
                    <Grid container spacing={1}>
                        <ShieldsIoBadges data={my.langs.secondary} />
                        <ShieldsIoBadges data={my.langs.extra} />
                    </Grid>
                </TabEntry>
                {/* Tools  */}
                <TabEntry index={2}>
                    <Grid container
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}>
                        {/* <Grid item sm>
                            <img alt="tools" src={`https://skillicons.dev/icons?i=${my.tools.primary}&perline=6`} />
                        </Grid> */}
                        <Grid item container sm spacing={1}>
                            <ShieldsIoBadges data={my.tools.secondary} />
                        </Grid>
                    </Grid>
                </TabEntry>
            </AutoPlaySwipeableViews>
        </Box>
    );
}
// static data here
const my = {
    "preamble": ``,
    "name": "Zavaar Shah",
    "caption": "Zavaar Shah is a computer science student at Wayne State University.",
    "langs": {
        primary: [ // these are the langs
            "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
            "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
            "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue",
            "https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white",
            "https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white",
            "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
            "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
            "https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white",
            "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
            "https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
            "https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white"
        ],
        secondary: [ // these are frameworks
            "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
            "https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white",
            "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
            "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white",
            "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white",
            "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white",
            "https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9",
            "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
            "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
            "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white",
            "https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
            "https://img.shields.io/badge/OpenCV-27338e?style=for-the-badge&logo=OpenCV&logoColor=white",
            "https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white",
            "https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white",
            "https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white",
            "https://img.shields.io/badge/Jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white",
            "https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white",
            "https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
            "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white",
            "https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black",
            "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
            "https://img.shields.io/badge/OAuth-2.0-white?style=for-the-badge&logo=Oauth2",
            "https://img.shields.io/badge/Twilio-API-F22F46?style=for-the-badge&logo=Twilio&logoColor=white",
            "https://img.shields.io/badge/Patreon-API-F96854?style=for-the-badge&logo=Patreon",
            "https://img.shields.io/badge/Github%20Actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white",
            "https://img.shields.io/badge/Spotify-API-1ED760?style=for-the-badge&logo=Spotify",
            "https://img.shields.io/badge/discord.js-API-5865F2?style=for-the-badge&logo=Discord",
            "https://img.shields.io/badge/tmi.js-API-9146FF?style=for-the-badge&logo=Twitch",
        ],
        extra: [
            "https://img.shields.io/badge/Brain.js-yellow?style=flat-square",
            "https://img.shields.io/badge/PyGame-informational?style=flat-square",
            "https://img.shields.io/badge/YTDL-red?style=flat-square",
            "https://img.shields.io/badge/Hugo-blueviolet?style=flat-square",
            "https://img.shields.io/badge/ArcGIS-API-blue?style=flat-square",
            "https://img.shields.io/badge/ActionsOnGoogle-yellowgreen?style=flat-square",
            "https://img.shields.io/badge/MongooseJS-e6557e?style=flat-square",
            "https://img.shields.io/badge/Deta-CLI-ff69c9?style=flat-square",
            "https://img.shields.io/badge/PM2-Daemon-50b575?style=flat-square",

        ]
    },
    "tools": {
        primary: "vscode,visualstudio,vim,neovim,atom,idea,arduino,blender,cloudflare,linux,docker,github,git,mongodb,mysql,nginx,raspberrypi,regex,ae,au,ai,pr,ps",
        secondary: [
            "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white",
            "https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white",
            "https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white",
            "https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white",
            "https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
            "https://img.shields.io/badge/Arduino_IDE-00979D?style=for-the-badge&logo=arduino&logoColor=white",
            "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=aqua",
            "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
            "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
            "https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white",
            "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white",
            "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
            "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
            "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
            "https://img.shields.io/badge/Redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
            "https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
            "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white",
            "https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white",
            "https://img.shields.io/badge/Raspberry%20Pi-A22846?style=for-the-badge&logo=Raspberry%20Pi&logoColor=white",
            "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
            "https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white",
            "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
            "https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white",
            "https://img.shields.io/badge/Adobe%20after%20affects-CF96FD?style=for-the-badge&logo=Adobe%20after%20effects&logoColor=393665",
            "https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white",
            "https://img.shields.io/badge/Adobe%20Lightroom-31A8FF?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white",
            "https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black",
            "https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white",
            "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white",
            "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white",
            "https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white",
            "https://img.shields.io/badge/tmux-1BB91F?style=for-the-badge&logo=tmux&logoColor=white",
        ]
    },
    "skills": TabMenu
}

export default my;