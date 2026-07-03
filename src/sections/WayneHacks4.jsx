import React from 'react'
import Grid from '@mui/material/Grid'
import Contributions from '../components/Contributions'
import SocialMedia from '../components/SocialMedia'
import Gallery from '../components/Gallery'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'WayneHacks 4 Hackathon',
    description: `## Director
[WayneHacks 4](https://waynehacks-4.devpost.com/) is a 24-hour in-person hackathon hosted at 
[Wayne State University](https://engineering.wayne.edu/) on April 11, 2026. Hackers have 24 hours to collaborate and create a project
 that solves real-world problems. Over $1400 in prizes are given out at the end to the best hacks. 
In total, there were **142 applicants**, **66 active participants** from all across Southeast Michigan, and **27 project submissions**. 
Sponsored entirely by [Detroit Hacker House](https://detroithackerhouse.com/).`,
    banner: '/pics/whacks4_banner.png',
    complete: true,
    tags: 'TypeScript,Next.js,Supabase,PostgreSQL,Vercel,TailwindCSS,Agile,Git,CI/CD,Hackathon,Competition,Team Management,Trello,Leadership,Director,Event Planning,Public Speaking',
    objectives: `Oversaw a wide range of operational responsibilities, such as catering logistics, finances, procurement, and other assorted tasks.|
Lead bi-weekly meetings for website development and all other operational tasks with committee members.|
Developed, architected, and maintained waynehacks.com platform using TypeScript, Next.js (v16), Vercel, TailwindCSS, and Supabase.|
Hosted all events and ceremonies in front of live audience.|
Secured Detroit Hacker House as the sole sponsor, covering all event costs and ending with a budget surplus.`,
    timeline: [
      ['November 2025', 'Created committee for event planning.'],
      [
        'Early-December 2025',
        'Began overall delegation of tasks as well as development of waynehacks.com website.'
      ],
      [
        'December 2025',
        'Undertook waynehacks.com redesign for WayneHacks 4.'
      ],
      [
        'January 2026',
        'Added teams feature to waynehacks.com platform; began sponsorship outreach.'
      ],
      [
        'February 2026',
        'Confirmed judges from both the industry and university; secured Detroit Hacker House as sole sponsor.'
      ],
      ['Late-February 2026', 'Confirmed venue location with date and time.'],
      [
        'March 2026',
        'Finalized event schedule, catering logistics, and updated platform documentation.'
      ],
      ['April 11, 2026', 'WayneHacks 4 Event: Day 1.'],
      ['April 12, 2026', 'WayneHacks 4 Event: Day 2.']
    ]
  },
  components: { Contribs, Pictures, Links }
}

function Pictures() {
  return (
    <Gallery
      timeout={8500}
      images={[
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-team.jpg',
          label: 'WayneHacks 4 Team (myself on the very left)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-opening-ceremony2.jpg',
          label: 'Opening Ceremony (1/2)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-opening-ceremony.jpg',
          label: 'Opening Ceremony (2/3)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-opening-ceremony3.jpg',
          label: 'Opening Ceremony (3/3)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-hackers1.jpg',
          label: 'Hackers at Work (1/2)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-hackers2.jpg',
          label: 'Hackers at Work (2/2)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-lunch.jpg',
          label: 'Lunch'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-speaker2.jpg',
          label: 'Guest Speaker'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-presentations.jpg',
          label: 'Project Presentations'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-judges.jpg',
          label: 'Judges'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-closing-ceremony4.jpg',
          label: 'Closing Ceremony (1/5)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-closing-ceremony.jpg',
          label: 'Closing Ceremony (2/5)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-closing-ceremony2.jpg',
          label: 'Closing Ceremony (3/5)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-closing-ceremony3.jpg',
          label: 'Closing Ceremony (4/5)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-3rd-place.jpg',
          label: 'Closing Ceremony (5/5)'
        },
        {
          imgPath: '/pics/ext/waynehacks4/waynehacks4-closing-ceremony5.jpg',
          label: 'Farewell'
        }
      ]}
    />
  )
}

function Links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia
          name="Project Submissions"
          showName
          icon="fa-solid fa-envelope-circle-check"
          url="https://waynehacks-4.devpost.com/project-gallery"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="Waynehacks.com"
          showName
          icon="fa-solid fa-globe"
          url="https://waynehacks.com/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="GetInvolved"
          showName
          icon="fa-solid fa-graduation-cap"
          url="https://getinvolved.wayne.edu/event/12393124"
        />
      </Grid>
    </Grid>
  )
}

function Contribs() {
  return (
    <Grid container>
      <Grid item>
        <Contributions
          repos={['thatziv/waynehacks']}
          title="WayneHacks website"
        />
      </Grid>
    </Grid>
  )
}
