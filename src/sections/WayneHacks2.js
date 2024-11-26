import React from 'react'
import { Grid } from '@material-ui/core'
import Contributions from '../components/Contributions'
import SocialMedia from '../components/SocialMedia'
import Gallery from '../components/Gallery'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'WayneHacks 2 Hackathon',
    description: `## Director

[WayneHacks 2](https://waynehacks-2.devpost.com/) is a 24-hour in-person hackathon hosted at 
[Wayne State University](https://engineering.wayne.edu/). Hackers have 24 hours to collaborate and create a project
 that solves real-world problems. Over $1400 in prizes are given out at the end to the best hacks. 
In total, there were **97 registrants**, **34 active participants** from all across Southeast Michigan, and **10 project submissions**.
*We were projecting over 60 participants but uncooperative weather conditions made it difficult for many to attend.*`,
    banner: '/pics/whacks2_banner.png',
    complete: true,
    tags: 'TypeScript,Next.js,Supabase,PostgreSQL,Vercel,TailwindCSS,Agile,Git,CI/CD,Hackathon,Competition,Team Management,Trello,Leadership,Director,Public Speaking',
    objectives: `Oversaw a wide range of operational responsibilities, such as catering logistics, finances, procurement, and other assorted tasks.|
Lead bi-weekly meetings for website development and all other operational tasks with committee members.|
Developed, architected, and maintained waynehacks.com platform using TypeScript, Next.js (v14), Vercel, TailwindCSS, and Supabase.|
Hosted opening and closing ceremonies in front of live audience.|
Raised over $4,500 in funds from corporate sponsors and donors to help offset costs.`,
    timeline: [
      ['August 2023', 'Created committee for event planning.'],
      [
        'Late-August 2023',
        'Began overall delegation of tasks as well as development of waynehacks.com website.'
      ],
      [
        'Late-September 2023',
        'Deployed WayneHacks website through Vercel and opened early-registration for users.'
      ],
      [
        'October 2023',
        'Completed WayneHacks admin dashboard for applicant check-in and management.'
      ],
      ['November 2023', 'Confirmed venue location with date and time.'],
      ['Early-December 2023', 'Secured extra funding from corporate sponsors.'],
      [
        'Late-December 2023',
        'Confirmed judges from both the industry and university.'
      ],
      [
        'Early-January 2024',
        'Finalized event schedule, funding proposals, and catering logistics.'
      ],
      ['January 13, 2024', 'WayneHacks Event: Day 1.'],
      ['January 14, 2024', 'WayneHacks Event: Day 2.']
    ]
  },
  components: { Contribs, Pictures, Links }
}

function Pictures() {
  return (
    <Gallery
      images={[
        { imgPath: '/pics/ext/waynehacks2/9.jpg', label: 'Myself' },
        {
          imgPath: '/pics/ext/waynehacks2/1.jpg',
          label: 'Miscellaneous (1/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/10.jpg',
          label: 'Miscellaneous (2/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/11.jpg',
          label: 'Miscellaneous (3/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/12.jpg',
          label: 'Miscellaneous (4/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/13.jpg',
          label: 'Networking Event (1/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/14.jpg',
          label: 'Networking Event (2/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/15.jpg',
          label: 'Networking Event (3/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/17.jpg',
          label: 'Networking Event (4/4)'
        },
        { imgPath: '/pics/ext/waynehacks2/2.jpg', label: 'Lunch' },
        {
          imgPath: '/pics/ext/waynehacks2/6.jpg',
          label: 'Closing Ceremony (1/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/7.jpg',
          label: 'Closing Ceremony (2/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/5.jpg',
          label: 'Closing Ceremony (3/4)'
        },
        {
          imgPath: '/pics/ext/waynehacks2/4.jpg',
          label: 'Closing Ceremony (4/4)'
        },
        { imgPath: '/pics/ext/waynehacks2/8.jpg', label: 'Judges' },
        { imgPath: '/pics/ext/waynehacks2/3.jpg', label: 'Winners' }
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
          icon="fa-solid fa-envelope-circle-check"
          url="https://waynehacks-2.devpost.com/project-gallery"
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
          url="https://getinvolved.wayne.edu/event/9630763"
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
          title="WSU SCD Repository"
        />
      </Grid>
    </Grid>
  )
}
