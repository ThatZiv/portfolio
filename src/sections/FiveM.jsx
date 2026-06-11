import Grid from '@mui/material/Grid'
import YouTubeEmbed from '../components/YouTubeEmbed'
import SocialMedia from '../components/SocialMedia'

// const getDate = () => {
//   let d = new Date()
//   return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
// }
/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'FiveM Bot',
    banner: '/pics/FiveM.png',
    complete: false,
    tags: 'JavaScript,NodeJS,Deployment Pipelines,MongoDB,Discord,Chat Bot,Docker,Version Control,Server Management,Database Migration & Management',
    description: `FiveM Bot is a Discord chat bot that makes monitoring game servers for server administrators easy. 
    Users can view game server metadata such as player count, player retention, server status, and more through Discord.
    This automation suite is used by tens of thousands of people every day, while maintaining a 99.7% service uptime.`,
    objectives: `Built monitoring process using custom-built API and database infrastructure
    |Integrated Patreon REST API to process monetary subscription purchases.
    |Encrypted and stored user-data with AES encryption to secure user data in database.
    |Developed failover service to deploy FiveM Bot on Railway (PaaS) when primary server goes down to ensure uptime.`,
    timeline: [
      ['August 2018', 'FiveM Bot project begins early-developmental stages.'],
      ['Early-September 2018', 'FiveM Bot releases beta program for testing.'],
      [
        'Late-September 2018',
        'FiveM Bot V1 releases to the public with production-ready code.'
      ],
      [
        'October 2018',
        'FiveM Bot is apart of over 500 servers and has served over 10K users'
      ],
      [
        'Early-May 2019',
        'FiveM Bot resides in over 3K servers and has served over 100K users'
      ],
      [
        'Late-May 2019',
        'FiveM Bot V3 is deployed with better scalability and sharding as it gains exponential traction.'
      ],
      [
        'May 2020',
        'FiveM Bot V8 is an entire re-write of the original bot and now utilizes the Patreon API for the new monetization platform.'
      ],
      ['Early-October 2021', 'Revenue peaks at an all-time high.'],
      [
        'October 28, 2021',
        "FiveM Bot obtains partnership with Snowside Hosting. Use code 'Zua' for 25% off recurring."
      ],
      [
        'December 2022',
        'Containerized FiveM Bot with Docker for easier deployment and management.'
      ],
      [
        'January 2022',
        'FiveM Bot is apart of 14K servers and has served over 5M users.'
      ],
      ['May 2024', 'Integrated failover service with Railway (PaaS).'],
      ['December 2024', 'FiveM Bot is apart of 26K servers.'],
      [
        'May 2026',
        'FiveMBot V10 focuses on performance improvements: reduced latency, better caching, proper database pooling, customer feedback form, security improvements, and more.'
      ]
    ]
  },
  components: { statistics, links }
}

function statistics() {
  return (
    <Grid container spacing={1}>
      <Grid item>
        <img
          alt="FiveM Chat Bot"
          className="Media"
          src="https://gh-card.dev/repos/thatziv/fivem-bot.svg?fullname="
          loading="lazy"
          decoding="async"
        />
      </Grid>
      <Grid item>
        <a href="https://top.gg/bot/483787947070586880">
          <img
            className="Media"
            src="https://top.gg/api/widget/483787947070586880.svg"
            alt="FiveM Chat Bot"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Grid>
      <Grid item sm>
        <img loading="lazy" decoding="async" />
        <img
          src="https://top.gg/api/widget/upvotes/483787947070586880.svg"
          alt="Discord Bots"
          loading="lazy"
          decoding="async"
        />
        <img
          src="https://top.gg/api/widget/servers/483787947070586880.svg"
          alt="Discord Bots"
          loading="lazy"
          decoding="async"
        />
        <img
          src="https://top.gg/api/widget/owner/483787947070586880.svg"
          alt="Discord Bots"
          loading="lazy"
          decoding="async"
        />
        <SocialMedia
          icon="server"
          showName
          name="Uptime"
          url="https://stats.uptimerobot.com/ExyQJtWJJ8/785361751"
        />
      </Grid>
    </Grid>
  )
}

function links() {
  return (
    <div>
      {/* cspell:disable-next-line */}
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item>
          <SocialMedia
            name="GitHub"
            showName
            url="https://github.com/thatziv/fivem-bot"
          />
        </Grid>
        <Grid item>
          <SocialMedia
            name="Patreon"
            showName
            url="https://patreon.com/fivembot"
          />
        </Grid>
        <Grid item>
          <SocialMedia
            name="Discord"
            showName
            url="https://discord.gg/yWddFpQ"
          />
        </Grid>
        <Grid item>
          <SocialMedia
            icon="server"
            showName
            name="Uptime"
            url="https://stats.uptimerobot.com/ExyQJtWJJ8/785361751"
          />
        </Grid>
        <Grid item>
          <SocialMedia
            icon="arrow-up-right-from-square"
            name="Use the bot"
            showName
            url="https://top.gg/bot/483787947070586880"
            confirmation
          />
        </Grid>
      </Grid>
      {/* cspell:disable-next-line */}
      <YouTubeEmbed id="qphtBvXSusE" />
    </div>
  )
}
