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
                    <Doxim.components.MoreInfo/>
                </Section>
                <Section icon="fa-solid fa-star" title="Welcoming">
                    <Doxim.components.Welcoming/>
                </Section>
            </MediaCard>
        </Grid>
    </Grow>
}