import React from 'react'
import Grid from '@mui/material/Grid'
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
    complete: true,
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
      ['Early-January 2024', 'Last-minute hotfix(s).'],
      ['January 2024', 'WayneHacks 2 Hackathon event takes place.'],
      ['June 2024', 'Site redesign and prep for WayneHacks 3.'],
      ['September 2024', 'Backend security audit fixes.'],
      ['October 2024', 'Additional security hardening and optimizations.'],
      ['November 2024', 'Shirt sizes added to application form.'],
      [
        'January 2025',
        'Added SMTP email integration for end-user and admin notifications.'
      ],
      ['January 18-19, 2025', 'WayneHacks 3 Hackathon takes place.'],
      [
        'December 2025',
        'Preparations for WayneHacks 4: General redesign, Next.js v16 and Supabase SSR migration(s).'
      ],
      [
        'January 2026',
        'Teams integration and functionality added along with other patches.'
      ],
      [
        'March 2026',
        'Updated documentation from work related to WayneHacks 4.'
      ],
      [
        'April 11-12, 2026',
        'WayneHacks 4 Hackathon takes place. Peak traffic reached.'
      ]
    ]
  },
  components: { Contribs, Pictures, Links, Description }
}

function Description() {
  const readme = `  

# WayneHacks.com

> *Taken from the repository's **[README.md](https://github.com/ThatZiv/waynehacks)***

![whacks-logo](https://github.com/ThatZiv/waynehacks/blob/master/public/android-chrome-512x512.png?raw=true)

# Features

The site features:

- Login/sign account up
- Support up to 10,000 MAU
- User administration settings
- Application submissions dashboard
- Dynamic configuration of site settings on Supabase (check the \`kv\` table)
- Discord webhook integration
  - User sign up
  - Application submission
  - Application status updates
- Administrator dashboard for [admins](https://waynehacks.com/admin)
- Administrator Live [(realtime)](https://supabase.com/docs/guides/realtime) application dashboard for [admins](https://waynehacks.com/admin/applications)
- **Costs 0 dollars to run**

## Technicalities

The website is built w/ [Next.js](https://nextjs.org) v14. For styling, we're using TailwindCSS and for the backend, we're using [Supabase](https://supabase.com) BaaS (firebase alternative). The next configuration we're running is serverless since Vercel - the place where this app is deployed - automatically handles it for us. With that, we almost fully have a SSR application with custom-protected middleware routing. The user will never directly interact with our supabase instance - it all goes through our server first.

### Database (public) [Schema](/supabase/migrations/20231122005059_remote_commit.sql)

![public-schema](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/.github/img/public-schema.png)

### Architecture Diagram

![diagram](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/.github/img/diagram.png)

# Setup

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

3. Create a \`.env.local\` file in the project's root. Reach out to @ThatZiv for the contents of this file.

4. Run in dev mode

\`\`\`sh
npm run dev
\`\`\`

## Setup (Backend)

1. Follow the instructions for [self-hosting](https://supabase.com/docs/guides/self-hosting/docker) Supabase to setup the local dev environment.

2. Follow the migration [guide](https://supabase.com/docs/guides/cli/local-development).

3. Create a \`.env\` file in the project's root. Reach out to @ThatZiv for the contents of this file.

4. Run the following command to start the backend server:

\`\`\`sh
npx supabase start
\`\`\`

# Branding

## WayneHacks 2

### Colors

- ![#FACC15](https://placehold.co/15x15/FACC15/FACC15.png) \`#FACC15\` - Gold
- ![#14532d](https://placehold.co/15x15/14532d/14532d.png) \`#14532d\` - Dark Green
- ![#000000](https://placehold.co/15x15/000000/000000.png) \`#000000\` - Black
- ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) \`#FFFFFF\` - White

### Fonts

- [Blinker](https://fonts.google.com/specimen/Blinker) - Primary Font
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) - Body Font

### Graphics

- ![WayneHacks Logo](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/public/whacks2-trans.png)
  Primary Transparent Logo (PNG)
- ![Banner](https://i.imgur.com/l4TRXB4.png) Banner with background

## WayneHacks 3

### Colors

- ![#df0046](https://placehold.co/15x15/df0046/df0046.png) \`#df0046\` - Rose
- ![#e5888c](https://placehold.co/15x15/e5888c/e5888c.png) \`#e5888c\` - Light[er] rose (accent)
- ![#edf4ed](https://placehold.co/15x15/edf4ed/edf4ed.png) \`#edf4ed\` - Light[er] green
- ![#353535](https://placehold.co/15x15/353535/353535.png) \`#353535\` - Gray
- ![#FFFFFF](https://placehold.co/15x15/FFFFFF/FFFFFF.png) \`#FFFFFF\` - White

### Fonts

- [Stratum](https://fonts.adobe.com/fonts/stratum) - Primary Font
- [Blinker](https://fonts.google.com/specimen/Blinker) - Secondary Font

## Graphics

- ![WayneHacks Logo](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/public/whacks3_trans.png)
  Primary Transparent Logo (PNG)
- ![Banner](https://i.imgur.com/raO795F.png) Banner with background
- ![Banner-transparent](https://i.imgur.com/ya6yuCM.png) Transparent banner

## WayneHacks 4

### Colors

- ![#FAFAFA](https://placehold.co/15x15/FAFAFA/FAFAFA.png) \`#FAFAFA\` - Off White
- ![#0EA5E9](https://placehold.co/15x15/0EA5E9/0EA5E9.png) \`#0EA5E9\` - Light Blue - Primary Accent
- ![#041A25](https://placehold.co/15x15/041A25/041A25.png) \`#041A25\` - Dark Blue - background gradient 1
- ![#14091B](https://placehold.co/15x15/14091B/14091B.png) \`#14091B\` - Dark Purple - background gradient 2

### Fonts

- [Stratum](https://fonts.adobe.com/fonts/stratum) - Primary Font
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) - Body Font
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) - Monospace / Code Font

### Graphics

- ![WayneHacks Logo](https://raw.githubusercontent.com/ThatZiv/waynehacks/master/public/icon.png)
  Primary Transparent Logo (PNG)
- ![Banner](https://i.imgur.com/fldgBvz.png) Banner with background
- ![Banner-transparent](https://i.imgur.com/2uPsF8M.png) Banner transparent
- ![ImgurLogo](https://i.imgur.com/pAiyQPp.png) Imgur Logo (for hosting graphics)


# Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome.


`
  return (
    <Grid container>
      <Grid
        item
        sx={{
          width: '100%'
        }}
      >
        <Markdown>{readme}</Markdown>
      </Grid>
    </Grid>
  )
}

function Pictures() {
  return (
    <Gallery
      images={[
        {
          imgPath: '/pics/ext/whacks-website/wh4-homepage.png',
          label: 'WayneHacks 4 homepage (2026 design)'
        },
        {
          imgPath: '/pics/ext/whacks-website/homepage.png',
          label: 'Home page (2023 design)'
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
          imgPath: '/pics/ext/whacks-website/teams-top.png',
          label: 'Teams dashboard'
        },
        {
          imgPath: '/pics/ext/whacks-website/teams-bottom.png',
          label: 'Teams dashboard (contd.)'
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
        },
        {
          imgPath: '/pics/ext/whacks-website/wh4-analytics.png',
          label: 'WayneHacks 4 Vercel analytics (days before the event)'
        }
      ]}
    />
  )
}

function Links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia showName url="https://github.com/thatziv/waynehacks" />
      </Grid>
      <Grid item>
        <SocialMedia
          name="WayneHacks.com 2024"
          showName
          icon="fa-solid fa-globe"
          url="https://web.archive.org/web/20240321091905/https://www.waynehacks.com/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="WayneHacks.com 2025"
          showName
          icon="fa-solid fa-globe"
          url="https://web.archive.org/web/20250307070842/https://www.waynehacks.com/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="WayneHacks.com 2026"
          showName
          icon="fa-solid fa-globe"
          url="https://web.archive.org/web/20260704012342/https://www.waynehacks.com/"
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
