import { Grid } from '@material-ui/core'
import React from 'react'
import SocialMedia from '../components/SocialMedia'
import Lecture from '../components/Lecture'
/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'Google Developer Student Club at WSU',
    banner: 'pics/gdsc-social-share.png',
    complete: true,
    tags: 'Kotlin,Android Development,App Development,JavaScript,TypeScript,Firebase,BaaS,Git,Pair Programming,Android Studio,GDSC,Google',
    objectives: `Technical Facilitating at Google Developer Student Club (GDSC) WSU.
|Organize and host workshops based on Google technologies.
|Oversee all organizational planning and operations.`,
    description: `## President
[Google Developer Student Clubs](https://gdsc.community.dev/wayne-state-university/) (GDSC) are university-based communities, where students learn about Google technology and use their skills to solve local problems. The GDSC gives students the opportunity to connect and network with individuals from diverse backgrounds and majors. It also allows students to learn about different technical topics through talks, workshops, and events. The GDSC is a great opportunity for students to give back to their community and develop themselves along the way!`,
    timeline: [
      ['October 2022', 'Recruited as Technical Lead.'],
      ['November 2022', 'Hosted Android Study Jams Event (1/2).'],
      ['December 2022', 'Hosted Android Study Jams Event (2/2).'],
      ['March 4, 2023', 'Co-hosted Google Firebase workshop.'],
      ['August 2023', 'Promoted to President.'],
      ['November 17, 2023', 'Co-hosted industry speaker event.'],
      ['August 2024', 'Stepped down as President.']
    ]
  },
  components: { Lectures, Links }
}

function Lectures() {
  return (
    <Grid container>
      {/* cspell:disable */}
      <Lecture title="Google Firebase" YouTubeID="nUOMTViKsko" />
      <Lecture title="Android App Development (1/2)" YouTubeID="xv_tRBvfYDU" />
      <Lecture title="Android App Development (2/2)" YouTubeID="k8xtZQevP4w" />
      {/* cspell:enable */}
    </Grid>
  )
}

function Links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia
          name="GetInvolved"
          icon="fa-solid fa-graduation-cap"
          url="https://getinvolved.wayne.edu/organization/gdsc"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-instagram"
          url="https://www.instagram.com/gdsc.waynestate/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-linkedin-in"
          url="https://www.linkedin.com/company/gdsc-wsu/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-google"
          url="https://developers.google.com/community/gdsc"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-youtube"
          url="https://www.youtube.com/channel/UCyDp4aiePo-fFSG41m4sXQg"
        />
      </Grid>
    </Grid>
  )
}
