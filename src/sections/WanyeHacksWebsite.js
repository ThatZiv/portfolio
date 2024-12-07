import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Contributions from '../components/Contributions'
import SocialMedia from '../components/SocialMedia'
import Gallery from '../components/Gallery'
import Markdown from '../components/Markdown'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'WayneHacks.com',
    description: `[www.waynehacks.com](https://waynehacks.com/) is a purpose-built **Hackathon Management System** 
 developed for [WayneHacks 2](/#/experience?expand=WayneHacks+2+Hackathon). It's built with TypeScript, [Next.js](https://nextjs.org),
 [Supabase](https://supabase.com/), deployed with [Vercel](https://vercel.com), and styled with [Tailwind](https://tailwindcss.com/). 
 The platform provides an admin dashboard to manage relevant data with real-time synchronization, applicant check-in, 
 status changes, and dynamic global site settings. Applicants have a dashboard to view their status, 
 check-in, event schedule, and withdraw their application.`,
    banner: '/pics/whacks-website-home.gif',
    complete: false,
    tags: 'TypeScript,Next.js,Supabase,PostgreSQL,Vercel,TailwindCSS,Agile,Git,CI/CD,Hackathon,Competition,Full Stack,UI/UX,GitHub',
    objectives: `Developed, architected, and maintained waynehacks.com platform using TypeScript, Next.js (v14), Vercel, TailwindCSS, and Supabase.|
Led a cross-functional development team of two members following agile methodologies.|
Facilitated bi-weekly meetings to ensure effective communication and collaboration within the development team.|
Received over 1K daily site views in the week leading up to event day, showcasing the platform's popularity and effective outreach.|
Initiated the development timeline very early on, ensuring a strategic and well-planned approach for seamless development and execution in later stages. 
`,
    timeline: [
      ['Late-August 2023', 'Began architectural development of website.'],
      [
        'September 2023',
        'Deployed website through Vercel and opened early-registration for users after core features were completed.'
      ],
      ['Late-September 2023', 'Began development of admin dashboard.'],
      ['Early-October 2023', 'Implemented dynamic global site settings.'],
      [
        'Late-November 2023',
        'Completed WayneHacks admin dashboard for applicant management.'
      ],
      ['Mid-November 2023', 'Redesigned site theme, graphics, and homepage.'],
      [
        'Early-December 2023',
        'Implemented dynamic event schedule exporting as iCal feed.'
      ],
      ['Late-December 2023', 'Added applicant check-in for admins.'],
      ['Early-January, 2024', 'Last-minute hotfix(s).'],
      ['January 2024', 'WayneHacks 2 Hackathon event takes place.'],
      ['June 2024', 'Site redesign and prep for WayneHacks 3.'],
      ['September 2024', 'Backend security audit fixes.']
    ]
  },
  components: { Contribs, Pictures, Links, Description }
}

function Description() {
  const readme = `  

## WayneHacks.com

> *Taken from the repository's **[README.md](https://github.com/ThatZiv/waynehacks)***

![whacks-logo](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/public/whacks2-trans.png)

## Features

The site features:

- Login/sign account up
- Support up to 10,000 MAU
- User administration settings
- Application submissions dashboard
- Dynamic configuration of site settings on Supabase (check the *kv* table)
- Discord webhook integration
  - User sign up
  - Application submission
  - Application status updates
- Administrator CMS dashboard for [admins](https://waynehacks.com/admin)
- Administrator Live [(realtime)](https://supabase.com/docs/guides/realtime) application dashboard for [admins](https://waynehacks.com/admin/applications)
- **Costs 0 dollars to run**


## Technicalities

The website is built w/ [Next.js](https://nextjs.org) v14. For styling, we're using tailwind css and for the backend, we're using [Supabase](https://supabase.com) BaaS (firebase alternative). The next configuration we're running is serverless since Vercel - the place where this app is deployed - automatically handles it for us. With that, we almost fully have a SSR application with custom-protected middleware routing. The user will never directly interact with our supabase instance - it all goes through our server first.

### Database (public) [Schema](/supabase/migrations/20231122005059_remote_commit.sql)

![public-schema](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/.github/img/public-schema.png)


### Architecture Diagram

![diagram](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/.github/img/diagram.png)


## Setup


> [!NOTE]
> To start developing, you will need to install [Node.js](https://nodejs.org)

1. Clone the repo

    \`\`\`sh
    git clone https://github.com/thatziv/waynehacks
    cd waynehacks
    \`\`\`

2. Install dependencies

    \`\`\`sh
    npm i
    \`\`\`

3. Create a *.env.local* file in the project's root. Reach out to @ThatZiv for the contents of this file.

4. Run in dev mode

    \`\`\`sh
    npm run dev
    \`\`\`

## Branding

### Colors

- ![#FACC15](https://via.placeholder.com/15/FACC15/000000?text=+) *#FACC15* - Gold
- ![#14532d](https://via.placeholder.com/15/14532d/000000?text=+) *#14532d* - Dark Green
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) *#000000* - Black
- ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) *#FFFFFF* - White


### Fonts

- [Blinker](https://fonts.google.com/specimen/Blinker) - Primary Font
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) - Body Font


### Graphics

- ![WayneHacks Logo](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/public/whacks2-trans.png)
  Primary Transparent Logo (PNG)
- ![WayneHacks Logo](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/public/android-chrome-512x512.png) Logo with background
- ![Banner](https://i.imgur.com/l4TRXB4.png) Banner with background

`
  return (
    <Grid container>
      <Grid
        item
        sx={{
          width: '100%'
        }}
      >
        <Markdown
          overrideConfig={{
            p: ({ children }) => (
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {children}
              </Typography>
            )
          }}
        >
          {readme}
        </Markdown>
      </Grid>
    </Grid>
  )
}

function Pictures() {
  return (
    <Gallery
      images={[
        {
          imgPath: '/pics/ext/whacks-website/homepage.png',
          label: 'Home page'
        },
        {
          imgPath:
            'https://raw.githubusercontent.com/ThatZiv/waynehacks/master/.github/img/diagram.png',
          label: 'Architecture diagram'
        },
        {
          imgPath:
            'https://raw.githubusercontent.com/ThatZiv/waynehacks/master/.github/img/public-schema.png',
          label: 'Database schema'
        },
        {
          imgPath: '/pics/ext/whacks-website/application-apply.png',
          label: 'Application dashboard'
        },
        {
          imgPath: '/pics/ext/whacks-website/application-dashboard.png',
          label: 'Applicant dashboard'
        },
        {
          imgPath: '/pics/ext/whacks-website/admin-dashboard.png',
          label: 'Admin dashboard'
        },
        {
          imgPath: '/pics/ext/whacks-website/admin-applications.png',
          label: 'Admin applicants dashboard'
        },
        {
          imgPath: '/pics/ext/whacks-website/login.png',
          label: 'Login page'
        },
        {
          imgPath: '/pics/ext/whacks-website/forget-password.png',
          label: 'Forget password page'
        },
        {
          imgPath: '/pics/ext/whacks-website/confirm-account.png',
          label: 'Confirm account (verify email) page'
        }
      ]}
    />
  )
}

function Links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia url="https://github.com/thatziv/waynehacks" />
      </Grid>
      <Grid item>
        <SocialMedia
          name="Website"
          icon="fa-solid fa-globe"
          url="https://waynehacks.com/"
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
          title="WayneHacks Repository"
        />
      </Grid>
    </Grid>
  )
}
