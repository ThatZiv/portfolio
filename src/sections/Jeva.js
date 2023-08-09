import { Button, Grid } from '@material-ui/core'
//import MediaCard from '../components/MediaCard';
import YouTubeEmbed from '../components/YouTubeEmbed'
// all static content of the Jeva project
/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'Jeva',
    banner: '/pics/Jeva.jpg',
    complete: false,
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
      ]
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
        />
        <img
          className="Media"
          alt="Subscribers"
          src="https://img.shields.io/youtube/channel/subscribers/UCI7x329xu2rLbtVvFPVIhiQ?style=social"
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
    <div>
      <YouTubeEmbed id="Ci-EuLhFeOY" />
      <br />
      <Grid container spacing={1}>
        {' '}
        {/* // TODO: these links are not SocialMedia comps, convert them (for confirmation dialog)... */}
        <Grid item xs>
          <Button
            variant="contained"
            style={{ backgroundColor: '#e6342e', color: 'white' }}
            href="https://youtube.com/jevajs"
          >
            <i className="fa-brands fa-youtube" /> &nbsp;YouTube
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            style={{ backgroundColor: '#ddd', color: '#333' }}
            href="https://github.com/jevajs"
          >
            <i className="fa-brands fa-github" />
            &nbsp;GitHub
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            style={{ backgroundColor: '#f96854', color: '#052d49' }}
            href="https://patreon.com/jevajs"
          >
            <i className="fa-brands fa-patreon" />
            &nbsp;Patreon
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            style={{ backgroundColor: '#5865F2', color: '#ffffff' }}
            href="https://discord.com/invite/PAaZ86d"
          >
            <i className="fa-brands fa-discord" />
            &nbsp;Discord
          </Button>
        </Grid>
      </Grid>
    </div>
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
          />
        </a>
      </Grid>
      <Grid item>
        <iframe
          title="socialBlade1"
          className="Media"
          style={{ frameBorder: 0, scrolling: 'no' }}
          src="https://socialblade.com/widget?v=1&u=jevajs"
        ></iframe>
      </Grid>
      <Grid item>
        <iframe
          title="socialBlade2"
          className="Media"
          style={{ frameBorder: 0, scrolling: 'no' }}
          src="https://socialblade.com/widget?v=2&u=jevajs"
        ></iframe>
      </Grid>
    </Grid>
  )
}

// export default { Objectives, Links, Description, Statistics, Timeline }
