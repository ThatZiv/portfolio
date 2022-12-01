import { Grid } from "@material-ui/core"
import { Grow, Typography } from "@mui/material"
import React from "react"
import MediaCard from "../components/MediaCard"
import Section from "../components/Section"
import YouTubeEmbed from "../components/YouTubeEmbed"
import Doxim from "../sections/Doxim"
import SCD from "../sections/SCD"

export const LayoutGrid = ({ children }) => <Grid
    justifyContent="flex-start"
    style={{ marginTop: "10px" }}
    container spacing={2}>{children}</Grid>

export default function Experience() {
    return <Grow in timeout={500}>
        <div>
            <Section icon="fa-solid fa-briefcase" title="Employment" open>
                <LayoutGrid>
                    {/* Doxim */}
                    <MediaCard {...Doxim.meta} size={12}>
                        <Section icon="fa-solid fa-circle-info" title="More Info">
                            <Doxim.components.MoreInfo />
                        </Section>
                        <Section icon="fa-solid fa-star" title="Welcoming">
                            <Doxim.components.Welcoming />
                        </Section>
                    </MediaCard>
                </LayoutGrid>
            </Section>
            <Section icon="fa-solid fa-book-open-reader" title="Leadership" open>
                <LayoutGrid>
                    <MediaCard {...SCD.meta}></MediaCard>
                </LayoutGrid>
            </Section>
        </div>
    </Grow>
}