import React from 'react'
import { Grid } from '@material-ui/core'
import Contributions from '../components/Contributions'
import Lecture from '../components/Lecture'
import SocialMedia from '../components/SocialMedia'
import Status from '../components/Status'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'WayneHacks Hackathon',
    description: `## Co-Director

[WayneHacks](https://waynehacks.devpost.com/) is a 48-hour virtual hackathon hosted at 
[Wayne State University](https://engineering.wayne.edu/). Hackers have 48 hours to complete a project related to the theme given at the opening ceremony. 
WayneHacks also hosts workshops and two gaming tournaments during the event! $5000 in prizes are given out at the end to the best hacks. 
In total, there were over **100 registrants**, **50 active participants**, and **16 project submissions**.`,
    banner: '/pics/whacks.png',
    complete: true,
    tags: 'JavaScript,Python,HTML/CSS,Docker,JS DOM,React.js,Agile,Pair Programming,Git,CI/CD,Hackathon,Competition,Team Management,Co-Director',
    objectives: `Conducted preliminary meetings relating to funding, event schedule, and judging criteria with committee members.|
Developed interactive JavaScript DOM workshop with JavaScript.|
Developed interactive Google Firebase workshop with JavaScript and Python.|
Co-hosted public ceremonies for opening and closing of the Hackathon event.`,
    timeline: [
      ['January 2023', 'Created committee for event planning.'],
      [
        'Early-February 2023',
        'Reached out to Wayne State University faculty members for judging.'
      ],
      [
        'Late-February 2023',
        'Created and deployed WayneHacks website to "www.waynehacks.com".'
      ],
      ['Late-February 2023', 'Finalized event schedule.'],
      ['March 3, 2023', 'Co-hosted opening ceremony.'],
      ['March 3, 2023', 'Hosted JavaScript DOM workshop.'],
      ['March 4, 2023', 'Co-hosted Google Firebase workshop.'],
      [
        'March 4, 2023',
        'Ran game tournament with production-ready Docker servers.'
      ],
      ['March 5, 2023', 'Co-hosted closing ceremony.']
    ]
  },
  components: { Lectures, Contribs, Links }
}

function Lectures() {
  return (
    <Grid container>
      {/* cspell:disable */}
      <Lecture title="Opening Ceremony" YouTubeID="eD6vRXIsiYQ" />
      <Lecture
        title="Workshop Event #1 (JavaScript DOM)"
        YouTubeID="HTxYtiTAsZU"
      />
      <Lecture
        title="Workshop Event #2 (Google Firebase)"
        YouTubeID="nUOMTViKsko"
      />
      <Lecture title="Presentations" YouTubeID="BUvKisZIHjs" />
      <Lecture title="Closing Ceremony" YouTubeID="WYBUJVTmHnk" />
      {/* cspell:enable */}
    </Grid>
  )
}

function Links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia
          name="Project Submissions"
          icon="fa-solid fa-envelope-circle-check"
          url="https://waynehacks.devpost.com/project-gallery"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="Website"
          icon="fa-solid fa-globe"
          url="https://waynehacks.com/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="GetInvolved"
          icon="fa-solid fa-graduation-cap"
          url="https://getinvolved.wayne.edu/event/8905074"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-solid fa-instagram"
          url="https://www.instagram.com/wayne.hacks/"
        />
      </Grid>
      <Grid xs={12} item>
        <Status pattern="/WayneHacks/g" url="https://waynehacks.com" />
      </Grid>
    </Grid>
  )
}

function Contribs() {
  return (
    <Grid container>
      <Grid item>
        <Contributions
          repos={[
            'WSU-Society-of-Computer-Developers/workshops',
            'WSU-Society-of-Computer-Developers/waynehacks-website'
          ]}
          title="WSU SCD Repository"
        />
      </Grid>
      <Grid item>
        <Status paper pattern="/WayneHacks/g" url="https://waynehacks.com" />
      </Grid>
    </Grid>
  )
}
