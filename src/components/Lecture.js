import React from "react"
import { Grid, Divider } from "@material-ui/core"
import { Typography } from "@mui/material"
import YouTubeEmbed from "../components/YouTubeEmbed"

/* 
    LecturePropsType = {
        children: React.Component,
        YouTubeID: String,
        Title: String,
    }
*/
export default function Lecture({ children, YouTubeID: id, title }) {
    return (
        <Grid item xs={12} md={6} lg={6}>
            <div style={{ padding: 10 }}>
                <Typography align="Left" style={{ fontFamily: "Teko" }} variant="h4">
                    {title}
                </Typography>
                <YouTubeEmbed id={id} />
                {children}
            </div>
            <Divider style={{ marginRight: 18, marginLeft: 18, marginTop: 8 }} />
        </Grid>
    )
}