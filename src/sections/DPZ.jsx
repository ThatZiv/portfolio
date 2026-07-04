import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: "Domino's",
    description: `## Associate Software Engineer
[Domino's Pizza](https://www.dominos.com) is a [Fortune 500®](https://fortune.com/company/dominos-pizza/) American multinational pizza restaurant chain headquartered in [Ann Arbor](https://en.wikipedia.org/wiki/Ann_Arbor), Michigan, U.S.`,
    banner: '/pics/dpz-banner.png',
    complete: false,
    tags: `Java,Spring Boot,Kubernetes,E-commerce,DPZ,Domino's Pizza`,
    objectives: `Stay tuned...`,
    timeline: [
      [
        'June 2026',
        'Started first rotation in the E-commerce fulfillment team for dominos.com.'
      ]
    ]
  },
  components: { MoreInfo }
}

function MoreInfo() {
  return (
    <div>
      <Grid container>
        <Grid item sm>
          <Typography variant="caption">
            Domino's Pizza, Inc. is an American multinational pizza restaurant
            chain founded in 1960. We're committed to being the world's most
            beloved pizza delivery company through innovation, quality, and
            exceptional customer service.
            <br />
            <br />
            As a FORTUNE 500® company, we're known for our innovative delivery
            technology, including our Order Tracker and AI-powered pizza
            recommendations. With over 21,000 stores in more than 90 countries,
            we serve millions of customers every day.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
