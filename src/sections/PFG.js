import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@mui/material'
import YouTubeEmbed from '../components/YouTubeEmbed'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'Principal Financial Group',
    description: `## Software Engineering Intern
Principal Financial Group is a [Fortune 500](https://fortune.com/company/principal-financial/fortune500/) American global financial investment management and insurance company headquartered in [Des Moines](https://en.wikipedia.org/wiki/Des_Moines), [Iowa](https://en.wikipedia.org/wiki/Des_Moines), U.S.`,
    banner: '/pics/pfg.png',
    complete: false,
    tags: `TypeScript,JavaScript,React,Electron,Python,Amazon Web Services,
AWS CDK,AWS Lambda,DynamoDB,API Gateway,IaC,S3,Spotify Backstage,Webpack,UI/UX,Docker,Elasticsearch,
Powershell,Bash,Ansible,GitHub,CI/CD,Agile,SCRUM,DevOps,LCM,Internship,Pair Programming,PFG,Principal,Finance`,
    objectives: `Developed frontend executable using React.js, Electron, TypeScript, and AWS services main product, facilitating engineer workstation setups that contribute to enhanced team productivity.
        |Leveraged AWS Lambda, DynamoDB, React.js, and Electron to develop a scalable solution in company-wide hackathon competition.
        |Documented architectural decisions, codebase structure, and integration details, aiding seamless knowledge transfer.
        |Adhered to Agile methodologies, ensuring timely task completion, iterative development, and product deployment with Jira.`, // Objectives are separated by PIPE '|'
    timeline: [
      ['May 8th, 2023', 'Internship begins on DevOps team.'],
      ['July 13th, 2023', 'Moved to developer portal team.']
    ]
  },
  components: { MoreInfo, Welcoming }
}

function MoreInfo() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <YouTubeEmbed id="eU-eX6Akb2w" />
        </Grid>
        <Grid item sm>
          <i>Taken from www.doxim.com: </i>
          <br />
          <Typography variant="caption">
            The Doxim Platform helps clients communicate reliably and
            effectively, improves cross-sell and upsell opportunities, and
            drives increased loyalty and wallet share through personalized
            communications and easy-to-use payment processes. The platform
            addresses key digitization, operational efficiency, and customer
            experience challenges through our suite of plug-and-play,
            integrated, SaaS software and technology solutions. Learn more at{' '}
            <a href="https://www.doxim.com/">www.doxim.com</a>.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

function Welcoming() {
  return (
    <div>
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:6941068042143510528"
        height="1000px"
        width="100%"
        frameBorder="0"
        allowFullScreen=""
        title="Embedded post"
      ></iframe>
    </div>
  )
}
