import { Grid } from "@material-ui/core"
import { Grow, Typography } from "@mui/material"
import React from "react"
import MediaCard from "../components/MediaCard"
import Section from "../components/Section"
import YouTubeEmbed from "../components/YouTubeEmbed"
import Doxim from "../sections/Doxim"

export default function Employment() {
    return <Grow in timeout={500}>
        <Grid
            justifyContent="flex-start"
            style={{ marginTop: "10px" }}
            container spacing={2}>
            <MediaCard {...Doxim.meta} size={12}>
                <Section icon="fa-solid fa-circle-info" title="More Info">
                    <Grid container>
                        <Grid item xs={12}>
                            <YouTubeEmbed id="eU-eX6Akb2w" />
                        </Grid>
                        <Grid item sm>
                            <i>Taken from www.doxim.com: </i><br/>
                            <Typography variant="caption">
                            Doxim is the customer communications management and engagement technology leader serving highly regulated markets, including financial services, utilities and healthcare. We provide omnichannel document and payment solutions that transform experiences and strengthen engagement throughout the entire lifecycle. The Doxim Platform helps clients communicate reliably and effectively, improves cross-sell and upsell opportunities, and drives increased loyalty and wallet share through personalized communications and easy-to-use payment processes. The platform addresses key digitization, operational efficiency, and customer experience challenges through our suite of plug-and-play, integrated, SaaS software and technology solutions. Learn more at <a href="https://www.doxim.com/">www.doxim.com</a>.
                            </Typography>
                        </Grid>
                    </Grid>
                </Section>
                <Section icon="fa-solid fa-star" title="Welcoming">
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6941068042143510528" height="1000px" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </Section>
            </MediaCard>
        </Grid>
    </Grow>
}