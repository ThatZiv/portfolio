import React from "react"
import { Grid } from "@material-ui/core"
import Contributions from "../components/Contributions"
import Lecture from "../components/Lecture"
import SocialMedia from "../components/SocialMedia"

/** @type {import("../types/section").Section} */
export default {
    meta: {
        title: "Spartahack 8 Hackathon",
        description: `[SpartaHack 8](https://spartahack.com), 
            hosted by [Michigan State University](https://msu.edu), is 24-hour in-person hackathon competition.
            In this competition, our team created Earthly, 
            a full-stack web application that tracks your carbon emission savings. Every time you walk, bike, or use public transit, 
            you can use Earthly to measure against everyday units, compare with your friends, or complete challenges.
            In total, there were over **91 projects** by **500 participants** across **24 different schools**. 
            Our team was the recipient of the _Best Hack for Environmental Sustainability_ award.`,
        banner: "/pics/spartahack8-ppl.png",
        complete: true,
        tags: "JavaScript,React.js,HTML/CSS,Supabase,BaaS,PostgreSQL,Agile,Pair Programming,Git,CI/CD,Hackathon,Competition,Team Coordination",
        objectives: `Conducted meetings with team members to stay on track for project deployment using Agile methodology.|
            Setup frontend website with React and PicoCSS.|
            Integrated Supabase backend to frontend using PostgreSQL row-level security (RLS).|
            Facilitated team members' duties for project development.`,
        timeline: [
            ["January 2023", "Created committee for event planning."],
            ["Early-February 2023", "Reached out to Wayne State University faculty members for judging."],
            ["Late-February 2023", "Created and deployed WayneHacks website to \"www.waynehacks.com\"."],
            ["Late-February 2023", "Finalized event schedule."],
            ["March 3, 2023", "Co-hosted opening ceremony."],
            ["March 3, 2023", "Hosted JavaScript DOM workshop."],
            ["March 4, 2023", "Co-hosted Google Firebase workshop."],
            ["March 4, 2023", "Ran game tournament with production-ready Docker servers."],
            ["March 5, 2023", "Co-hosted closing ceremony."],
        ],
    }, components: { Lectures, Lecture, Contribs, Links }
}

function Lectures() {
    return (
        <Grid container>
            <Lecture title="Opening Ceremony" YouTubeID="eD6vRXIsiYQ" />
            <Lecture title="Workshop Event #1 (JavaScript DOM)" YouTubeID="HTxYtiTAsZU" />
            <Lecture title="Workshop Event #2 (Google Firebase)" YouTubeID="nUOMTViKsko" />
            <Lecture title="Presentations" YouTubeID="BUvKisZIHjs" />
            <Lecture title="Closing Ceremony" YouTubeID="WYBUJVTmHnk" />
        </Grid>
    )
}

function Links() {
    return (<Grid container spacing={2}>
        <Grid item>
            <SocialMedia name="Project Submissions" icon="fa-solid fa-envelope-circle-check" url="https://waynehacks.devpost.com/project-gallery" />
        </Grid>
        <Grid item>
            <SocialMedia name="Website" icon="fa-solid fa-globe" url="https://waynehacks.com/" />
        </Grid>
        <Grid item>
            <SocialMedia name="GetInvolved" icon="fa-solid fa-graduation-cap" url="https://getinvolved.wayne.edu/event/8905074" />
        </Grid>
        <Grid item>
            <SocialMedia icon="fa-solid fa-instagram" url="https://www.instagram.com/wayne.hacks/" />
        </Grid>
    </Grid>)
}

function Contribs() {
    return <Contributions repos={[
        "WSU-Society-of-Computer-Developers/workshops",
        "WSU-Society-of-Computer-Developers/waynehacks-website"
    ]} title="WSU SCD Repository" />
}