import { Divider, Grid } from "@material-ui/core"
import { Grow, Typography } from "@mui/material"
import React from "react"
import MediaCard from "../components/MediaCard"
import Section from "../components/Section"
import YouTubeEmbed from "../components/YouTubeEmbed"
import Doxim from "../sections/Doxim"
import GDSC from "../sections/GDSC"
import SCD from "../sections/SCD"

const styles = {
    heading: {
        fontSize: 25,
        fontWeight: "regular",
        fontFamily: "Teko, sans-serif",
        '@media (max-width:600px)': {
            textAlign: 'center',
        },
    }
}

// TODO: export this to its own component (if i ever need it elsewhere)
const Heading = ({ icon, title }) =>
    <div style={{ marginTop: 18 }}>
        <Typography sx={styles.heading}>
            <div><i className={icon} />&nbsp;&nbsp;{title}</div>
        </Typography>
    </div>

export const LayoutGrid = ({ children }) => <Grid
    justifyContent="flex-start"
    style={{ marginTop: "10px" }}
    container spacing={2}>{children}</Grid>

export default function Experience() {
    return <Grow in timeout={500}>
        <div>
            <Heading icon="fa-solid fa-book-open-reader" title="Employment" />
            <Divider style={{ marginBottom: 14 }} />
            <LayoutGrid>
                {/* Doxim */}
                <MediaCard {...Doxim.meta} size={12}>
                    <Section icon="fa-solid fa-circle-info" title="Info">
                        <Doxim.components.MoreInfo />
                    </Section>
                    <Section icon="fa-solid fa-star" title="Welcoming">
                        <Doxim.components.Welcoming />
                    </Section>
                </MediaCard>
            </LayoutGrid>
            <Heading icon="fa-solid fa-book-open-reader" title="Leadership" />
            <Divider style={{ marginBottom: 14 }} />
            <LayoutGrid>
                {/* SCD */}
                <MediaCard prechildren={<Section icon="fa-solid fa-video" title="Videos">
                    <SCD.components.Lectures />
                </Section>} {...SCD.meta}>
                    <Section icon="fa-solid fa-code" title="Code">
                        <SCD.components.Contribs />
                    </Section>
                    <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                        <SCD.components.Links />
                    </Section>
                </MediaCard>
                {/* GDSC */}
                <MediaCard prechildren={<Section icon="fa-solid fa-video" title="Videos">
                    <GDSC.components.Lectures />
                </Section>}
                    {...GDSC.meta}>
                    <Section icon="fa-solid fa-arrow-up-right-from-square" title="Links">
                        <GDSC.components.Links />
                    </Section>
                </MediaCard>
            </LayoutGrid>
        </div>
    </Grow>
}