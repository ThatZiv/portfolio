import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@mui/material'
import YouTubeEmbed from '../components/YouTubeEmbed'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'Principal Financial Group',
    description: `## Software Engineering Intern
[Doxim](https://doxim.com/) is the customer communications management and engagement technology leader serving highly regulated markets, including financial services, utilities and healthcare. We provide omnichannel document and payment solutions that transform experiences and strengthen engagement throughout the entire lifecycle.`,
    banner: '/pics/pfg.png',
    complete: false,
    tags: `TypeScript,JavaScript,React,Electron,Python,Amazon Web Services,
AWS CDK,AWS Lambda,DynamoDB,API Gateway,IaC,S3,Spotify Backstage,Webpack,UI/UX,Docker,Elasticsearch,
Powershell,Bash,Ansible,GitHub,CI/CD,Agile,SCRUM,DevOps,LCM,Internship,Pair Programming,PFG,Principal,Finance`,
    objectives: `Parsed and extracted data from text files using C# and PowerShell to create billing statements.
        |Managed credit union workflows to ensure organized and optimized month-end billing deliveries.
        |Designed proof-of-concept for virtual machine manager full-stack web project.
        |Created automation scripts for the composition, storage, and archival of business-critical documents. `, // Objectives are separated by PIPE '|'
    timeline: [
      ['May 8th, 2022', 'Internship begins.'],
      ['August 26th, 2023', 'Internship ends.']
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
