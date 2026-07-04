import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import SwipeableView from '../components/SwipeableView'
import theme from '../Theme'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'

const parseTopicFromURL = (url) => {
  // works only for img.shields.to badges
  try {
    let _url = new URL(url)
    return _url.pathname.replace('/badge/', '').split('-')[0]
  } catch (e) {
    return null
  }
}

const TabEntry = (props) => {
  return (
    <Box sx={{ padding: 2 }}>
      <div>{props.children}</div>
    </Box>
  )
}

const ShieldsIoBadges = (props) => {
  return props.data.map((val, index) => {
    var topic = parseTopicFromURL(val)
    return (
      <Grid key={`${val}:${index}:${topic}`} item>
        <Tooltip
          title={decodeURIComponent(topic).replace('_', ' ')}
          target="_blank"
        >
          <Link href={`https://google.com/search?q=${topic.replace('_', ' ')}`}>
            <img
              alt={`secondary lang ${index} ${topic}`}
              src={val}
              loading="lazy"
              decoding="async"
            />
          </Link>
        </Tooltip>
      </Grid>
    )
  })
}

const TabMenu = () => {
  const [value, setValue] = React.useState(0)
  const handleChangeIndex = (index) => {
    setValue(index)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
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
      <SwipeableView
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        interval={8500}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        {/* Languages */}
        <TabEntry index={0}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item container spacing={1}>
              <ShieldsIoBadges data={my.langs.primary} />
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
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            {/* <Grid item sm>
                            <img alt="tools" src={`https://skillicons.dev/icons?i=${my.tools.primary}&perline=6`} />
                        </Grid> */}
            <Grid item container sm spacing={1}>
              <ShieldsIoBadges data={my.tools.secondary} />
            </Grid>
          </Grid>
        </TabEntry>
      </SwipeableView>
    </Box>
  )
}
// static data here
const my = {
  name: 'Zavaar Shah',
  caption:
    "Zavaar Shah is a computer science graduate from Wayne State University. Currently building software @ Domino's.",
  langs: {
    primary: [
      // these are the langs
      'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
      'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
      'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white',
      'https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white',
      'https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white',
      'https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white',
      'https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white',
      'https://img.shields.io/badge/Shell_Script-121011?style=for-the-badge&logo=gnu-bash&logoColor=white',
      'https://img.shields.io/badge/powershell-5391FE?style=for-the-badge&logo=powershell&logoColor=white'
    ],
    secondary: [
      // these are frameworks
      'https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white',
      'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white',
      'https://img.shields.io/badge/Electron-2B2E3A?style=for-the-badge&logo=electron&logoColor=9FEAF9',
      'https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white',
      'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
      'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white',
      'https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white&textColor=black)',
      'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
      'https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white',
      'https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&logo=ansible&logoColor=white',
      'https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white',
      'https://img.shields.io/badge/ThreeJs-black?style=for-the-badge&logo=three.js&logoColor=white',
      'https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white',
      'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
      'https://img.shields.io/badge/Pug-E3C29B?style=for-the-badge&logo=pug&logoColor=black',
      'https://img.shields.io/badge/Github%20Actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white',
      'https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=Selenium&logoColor=white',
      'https://img.shields.io/badge/discord.js-API-5865F2?style=for-the-badge&logo=Discord',
      'https://img.shields.io/badge/tmi.js-API-9146FF?style=for-the-badge&logo=Twitch'
    ],
    /** These are for skills without shields.io badges (custom ones) */
    extra: []
  },
  tools: {
    primary:
      'vscode,visualstudio,vim,neovim,atom,idea,arduino,blender,cloudflare,linux,docker,github,git,mongodb,mysql,nginx,raspberrypi,regex,ae,au,ai,pr,ps',
    secondary: [
      'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=black&labelColor=white',
      'https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white',
      'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
      'https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
      'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white',
      'https://img.shields.io/badge/PocketBase-bbdbe4?style=for-the-badge',
      'https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white',
      'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
      'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white',
      'https://img.shields.io/badge/Redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white',
      'https://img.shields.io/badge/VIM-%2311AB00.svg?&style=for-the-badge&logo=vim&logoColor=white',
      'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=aqua',
      'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
      'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
      'https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white',
      'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
      'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
      'https://img.shields.io/badge/Debian-A81D33?style=for-the-badge&logo=debian&logoColor=white',
      'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white',
      'https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white',
      'https://img.shields.io/badge/Adobe%20after%20affects-CF96FD?style=for-the-badge&logo=Adobe%20after%20effects&logoColor=393665',
      'https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=for-the-badge&logo=adobe%20illustrator&logoColor=white',
      'https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black',
      'https://img.shields.io/badge/Adobe%20Premiere%20Pro-9999FF?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white',
      'https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white',
      'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white',
      'https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white',
      'https://img.shields.io/badge/prettier-1A2B34?style=for-the-badge&logo=prettier&logoColor=white'
    ]
  },
  skills: TabMenu,
  random: {
    quips: [
      'awkwardly charming',
      'clumsily talented',
      'uniquely skilled',
      'delightfully quirky',
      'humorously proficient',
      'incompetently competent',
      'eccentrically capable',
      'ironically adept',
      'unintentionally clever',
      'hilariously skilled',
      'unconventionally capable',
      'quirkily resourceful',
      'unintentionally skilled',
      'hilariously talented',
      'casually witty',
      'delightfully odd',
      'reliably rad',
      'endearingly blunt',
      'marvelously flawed',
      'vivaciously reserved',
      'quirkily ambitious',
      'inexpertly an expert',
      'cynically optimistic',
      'awkwardly charming'
    ],
    /* cspell:disable */
    hello: [
      'Zavaar Shah',
      'Welcome',
      'Willkommen',
      'Bienvenido',
      'Bienvenue',
      'Bem-vindo',
      '歡迎光臨',
      '어서 오세요',
      'ようこそ',
      'مرحبا',
      'Välkommen',
      'Hoş geldin'
    ]
    /* cspell:enable */
  }
}

export default my
