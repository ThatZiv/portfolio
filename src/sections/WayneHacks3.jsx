import React from 'react'
import Grid from '@mui/material/Grid'
import Contributions from '../components/Contributions'
import SocialMedia from '../components/SocialMedia'
import Gallery from '../components/Gallery'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'WayneHacks 3 Hackathon',
    description: `## Director
[WayneHacks 3](https://waynehacks-3.devpost.com/) is a 24-hour in-person hackathon hosted at 
[Wayne State University](https://engineering.wayne.edu/) on January 18, 2025. Hackers have 24 hours to collaborate and create a project
 that solves real-world problems. Over $1400 in prizes are given out at the end to the best hacks. 
In total, there were **105 applicants**, **43 active participants** from all across Southeast Michigan, and **13 project submissions**. 
*Uncooperative weather conditions made it difficult for many to attend.*`,
    banner: '/pics/whacks3_banner.png',
    complete: true,
    tags: 'TypeScript,Next.js,Supabase,PostgreSQL,Vercel,TailwindCSS,Agile,Git,CI/CD,Hackathon,Competition,Team Management,Trello,Leadership,Director,Event Planning,Public Speaking,WayneHacks 3',
    objectives: `Oversaw a wide range of operational responsibilities, such as catering logistics, finances, procurement, and other assorted tasks.|
Led bi-weekly meetings for website development and other operational tasks with committee members.|
Developed, architected, and maintained waynehacks.com platform using TypeScript, Next.js (v14), Vercel, TailwindCSS, and Supabase.|
Hosted all events and ceremonies in front of live audience.|
Raised over $2,500 in funds from the College of Engineering to offset costs - ending with budget surplus.`,
    timeline: [
      ['August 2024', 'Created committee for event planning.'],
      [
        'Late-August 2024',
        'Began overall delegation of tasks as well as development of waynehacks.com website.'
      ],
      [
        'Late-September 2024',
        'Updated WayneHacks website through Vercel and opened early-registration for users.'
      ],
      ['November 2024', 'Confirmed venue location with date and time.'],
      ['December 2024', 'Concluded aggressive outreach program for corporate sponsors.'],
      ['Early-December 2024', 'Secured extra funding from the College of Engineering.'],
      [
        'Late-December 2024',
        'Confirmed judges from both the industry and university.'
      ],
      [
        'Early-January 2025',
        'Finalized event schedule, funding proposals, and catering logistics.'
      ],
      ['January 18, 2025', 'WayneHacks 3 Event: Day 1.'],
      ['January 19, 2025', 'WayneHacks 3 Event: Day 2.']
    ]
  },
  components: { Contribs, Pictures, Links }
}

function Pictures() {
  return (
    <Gallery
      images={[
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-story-starting.jpg',
          label: 'Opening Ceremony'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-landscape.png',
          label: 'Hackers at Work (1/2)'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-landscape2.png',
          label: 'Hackers at Work (2/2)'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-story-breakfast.jpg',
          label: 'Breakfast'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-story-lunch.jpg',
          label: 'Lunch'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-story-voucher.jpg',
          label: 'Dinner Vouchers'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-promo.jpg',
          label: 'Event Promotion'
        },
        {
          imgPath: '/pics/ext/waynehacks3/waynehacks3-winners.jpg',
          label: 'Winners'
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
          url="https://waynehacks-3.devpost.com/project-gallery"
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
          url="https://getinvolved.wayne.edu/event/10857539"
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
