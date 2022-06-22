import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import theme from "../Theme"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
                <Tab value={1} label="Frameworks" />
                <Tab value={2} label="Tools" />
            </Tabs>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                interval={7570}
                onChangeIndex={handleChangeIndex}
            >
                <TabEntry index={0}>Item one</TabEntry>
                <TabEntry index={1}>Item two</TabEntry>
                <TabEntry index={2}>
                    <img alt="tools" src={`https://skillicons.dev/icons?i=${my.tools}&perline=6`} />
                </TabEntry>
            </AutoPlaySwipeableViews>
        </Box>
    );
}

const my = {
    "preamble": `A passionate computer science student at 
    Wayne State University who seeks to employ innovative 
    new technologies and methodologies in the workplace.`,
    "name": "Zavaar Shah",
    "tools": "vscode,visualstudio,vim,neovim,atom,idea,arduino,blender,cloudflare,linux,docker,github,git,heroku,mongodb,mysql,nginx,raspberrypi,regex,selenium,ae,au,ai,pr,ps",
    "skills": TabMenu
}

export default my;