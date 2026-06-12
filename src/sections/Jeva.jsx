import Grid from '@mui/material/Grid'
//import MediaCard from '../components/MediaCard';
import SocialMedia from '../components/SocialMedia'
import YouTubeEmbed from '../components/YouTubeEmbed'
// all static content of the Jeva project
/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'Jeva',
    banner: '/pics/Jeva.jpg',
    complete: true,
    tags: 'Tutorials,Lua,HTML/CSS,JavaScript,Game Development,Graphic Design,Video Editing,Version Control (Git),Open-source,Jeva,YouTube',
    objectives: `Created several YouTube videos for advanced programmers explaining how to use JavaScript, Lua, and HTML/CSS in a gaming environment.
        |Created introductory programming videos about setting up scripting environments.
        |Managed and created community forum and collaborate with others to support those in need of programming help.`,
    description: `A growing community that thrives off of helping people learn how to code.
        This YouTube channel was created in 2018 and focuses on teaching programming and scripting principles in a gaming environment. 
        As of Q1 of 2022, the channel has over 23K subscribers and over 3.8M total views. 
        The community forum currently has over 2K active members with people from all over the world.`,
    timeline: [
      ['October 22, 2018', 'Created the YouTube channel.'],
      ['December 1, 2018', 'Channel reaches 100 subscribers.'],
      ['January 5, 2019', 'Channel reaches 1K subscribers.'],
      ['April 18, 2020', 'Channel reaches 10K subscribers and ~ 1M views.'],
      [
        'September 1, 2020',
        'Jeva obtains partnership with Zap-Hosting (save 20% off using affiliate code "zuafromjeva-4193" on checkout).'
      ],
      ['December 15, 2020', 'Jeva GitHub repository reaches 1K forks.'],
      [
        'Late-December 2020',
        'Ad revenue peaks at an all-time high with over 1M monetized playbacks.'
      ],
      [
        'June 2, 2021',
        'Channel reaches 20K subscribers, 2M views, and over 10M impressions.'
      ],
      [
        'September 2021',
        'Jeva officially discontinues production of FiveM-related.'
      ],
      ['2023', 'The Jeva Patreon page is closed.'],
      ['August 2024', 'Started live-streaming on YouTube.']
    ],
    prechildren: prechildren()
  },
  components: { links, statistics }
}

function prechildren() {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item sm>
        <img
          className="Media"
          alt="Views"
          src="https://img.shields.io/youtube/channel/views/UCI7x329xu2rLbtVvFPVIhiQ"
          style={{ marginRight: 6 }}
          loading="lazy"
          decoding="async"
        />
        <img
          className="Media"
          alt="Subscribers"
          src="https://img.shields.io/youtube/channel/subscribers/UCI7x329xu2rLbtVvFPVIhiQ?style=social"
          loading="lazy"
          decoding="async"
        />
      </Grid>
      <Grid item xs={12}>
        <YouTubeEmbed id="Ci-EuLhFeOY" />
      </Grid>
    </Grid>
  )
}

function links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia name="YouTube" showName url="https://youtube.com/jevajs" />
      </Grid>
      <Grid item>
        <SocialMedia name="GitHub" showName url="https://github.com/jevajs" />
      </Grid>
      <Grid item>
        <SocialMedia
          name="Discord"
          showName
          url="https://discord.com/invite/PAaZ86d"
        />
      </Grid>
    </Grid>
  )
}

function statistics() {
  return (
    <Grid container spacing={1}>
      {/* <Typography variant="h5">GitHub</Typography> */}
      <Grid item>
        <a href="https://github.com/jevajs/jeva">
          <img
            className="Media"
            alt="githubJevaCard"
            src="https://gh-card.dev/repos/jevajs/jeva.svg"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Grid>
    </Grid>
  )
}

// export default { Objectives, Links, Description, Statistics, Timeline }
