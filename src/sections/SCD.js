import React from "react"
import { Grid } from "@material-ui/core"
import { Grow, Typography } from "@mui/material"
import YouTubeEmbed from "../components/YouTubeEmbed"
export default {
    meta: {
        title: "Society of Computer Developers",
        description: `## Software Lead
[Society of Computer Developers](https://getinvolved.wayne.edu/organization/scd) (SCD) at [Wayne State University](https://wayne.edu) is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. We invite industry speakers, allow members to present a project they developed, give organization updates, and practice coding problems. We also host events which include, skill building workshops, hackathons, coding nights, and social events!`,
        banner: "/pics/scd.png",
        complete: false,
        tags: "TypeScript,JavaScript,Python,C/C++,HTML/CSS,PowerShell,MongoDB,React.js,Agile,Pair Programming,SCD",
        objectives: `Parsed and extracted data from text files using C# and PowerShell to create billing statements.
        |Managed credit union workflows to ensure organized and optimized month-end billing deliveries.
        |Designed proof-of-concept for virtual machine manager full-stack web project.
        |Created automation scripts for the composition, storage, and archival of business-critical documents. `, // Objectives are seperated by PIPE '|'
        timeline: [
            ["September 2021", "Joined SCD as a member."],
            ["October 2021", "Recruited as Secretary."],
            ["February 2022", "Promoted to Software Lead."],
            // events hosted, website development, etc. (MAKE MD COMPATIBLE FOR LINKS)
            // also link github here
        ],
    }, components: { MoreInfo, Welcoming }
}

function MoreInfo() {
    return (<div>
        <Grid container>
            <Grid item xs={12}>
                <YouTubeEmbed id="eU-eX6Akb2w" />
            </Grid>
            <Grid item sm>
                <i>Taken from https://www.doxim.com: </i><br />
                <Typography variant="caption">
                    The Doxim Platform helps clients communicate reliably and effectively, improves cross-sell and upsell opportunities, and drives increased loyalty and wallet share through personalized communications and easy-to-use payment processes. The platform addresses key digitization, operational efficiency, and customer experience challenges through our suite of plug-and-play, integrated, SaaS software and technology solutions. Learn more at <a href="https://www.doxim.com/">www.doxim.com</a>.
                </Typography>
            </Grid>
        </Grid>
    </div>)
}

function Welcoming() {
    return (<div>
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6941068042143510528" height="1000px" width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
    </div>)
}
