import React from "react"
import { Grid, Divider } from "@material-ui/core"
import { Grow, Typography } from "@mui/material"
import YouTubeEmbed from "../components/YouTubeEmbed"

/* 
* REACT 
https://www.linkedin.com/feed/update/urn:li:activity:7000594870914465793
https://www.youtube.com/watch?v=S7wWg11tZxM

* DOCKER
https://www.linkedin.com/feed/update/urn:li:activity:6987833317593157633
https://www.youtube.com/watch?v=MrE1uvzuJW8

* Dynamic website (PROJ)
1. https://www.youtube.com/watch?v=tyCX7s3QfyY
2. https://www.youtube.com/watch?v=rXnBDTKaH3Y
3. https://www.youtube.com/watch?v=xxyelsQcz58
4. https://www.youtube.com/watch?v=AQg_lSHrwHs

* REST API
https://www.youtube.com/watch?v=UAWJ37Dmvz0

* WEB SCRAPING
https://www.youtube.com/watch?v=WOwC2NeDyF4
https://www.linkedin.com/feed/update/urn:li:activity:6903139263051898880

*/
export default {
    meta: {
        title: "Society of Computer Developers",
        description: `## Software Lead
[Society of Computer Developers](https://getinvolved.wayne.edu/organization/scd) (SCD) at [Wayne State University](https://wayne.edu) is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. We invite industry speakers, allow members to present a project they developed, give organization updates, and practice coding problems. We also host events which include, skill building workshops, hackathons, coding nights, and social events!`,
        banner: "/pics/scd.png",
        complete: false,
        tags: "TypeScript,JavaScript,Python,C/C++,HTML/CSS,Docker,Full Stack,Web Scraping,REST API,JS DOM,MongoDB,React.js,Agile,Pair Programming,SCD",
        objectives: `Created and hosted programming-related workshop events for students.
|Tutored and assisted students with coursework and other programming related content.
|Developed and managed official club website to display dynamic RSS & ICal feed using React, Express, and MongoDB.`, // Objectives are seperated by PIPE '|'
        timeline: [
            ["September 2021", "Joined SCD as a member."],
            ["October 2021", "Recruited as Secretary."],
            ["November 2021", "Participated in WSU SCD 2021 Hackathon (\"Most Technical\" award)."],
            ["February 2022", "Promoted to Software Lead."],
            ["February 8, 2022", "Participated in WSU SCD 2022 Hackathon (3rd place)."],
            ["February 25, 2022", "Hosted web scraping workshop."],
            ["April 17, 2022", "Hosted REST API workshop."],
            ["August 2022", "Began development of official club website."],
            ["September 2022", "Orchestrated month-long dynamic website project with weekly meetings."],
            ["October 2022", "Completed preview build of club website for production."],
            ["October 19, 2022", "Hosted Docker & Containerization workshop."],
            ["November 28, 2022", "Hosted React.js (web framework) workshop."]
        ],
    }, components: { Lectures, Lecture }
}

function Lecture({ children, YouTubeID: id, title }) {
    return (
        <Grid item xs={12} md={6} lg={6}>
            <div style={{ padding: 10 }}>
                <Typography align="Left" style={{ fontFamily: "Teko" }} variant="h4">
                    {title}
                </Typography>
                <YouTubeEmbed id={id} />
                {children}
            </div>
                <Divider style={{ marginRight: 18, marginLeft: 18, marginTop: 8 }}/>
        </Grid>
    )
}

function Lectures() {
    return (
        <Grid container>
            <Lecture title="React.js" YouTubeID="S7wWg11tZxM" />
            <Lecture title="Docker" YouTubeID="MrE1uvzuJW8" />
            <Lecture title="Full Stack (REST API Part 2)" YouTubeID="9OlMQpivP2Q" />
            <Lecture title="REST API Development" YouTubeID="UAWJ37Dmvz0" />
            <Lecture title="Web Scraping" YouTubeID="WOwC2NeDyF4" />
            <Lecture title="Dynamic Website Project (1/4)" YouTubeID="tyCX7s3QfyY" />
            <Lecture title="Dynamic Website Project (2/4)" YouTubeID="rXnBDTKaH3Y" />
            <Lecture title="Dynamic Website Project (3/4)" YouTubeID="xxyelsQcz58" />
            <Lecture title="Dynamic Website Project (4/4)" YouTubeID="AQg_lSHrwHs" />
        </Grid>
    )
}
