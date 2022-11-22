import React from "react"
import { Grid } from "@material-ui/core"
import { Grow, Typography } from "@mui/material"
import YouTubeEmbed from "../components/YouTubeEmbed"
export default {
    meta: {
        title: "Doxim",
        description: `\`Implementation Programming Intern\` at Doxim.  Doxim is the customer communications management and engagement technology leader serving highly regulated markets, including financial services, utilities and healthcare. We provide omnichannel document and payment solutions that transform experiences and strengthen engagement throughout the entire lifecycle [www.doxim.com](https://www.doxim.com).`,
        banner: "/pics/doxim.png",
        complete: false,
        tags: "C#,PowerShell,MySQL,Agile,Scripting,Virtualization Environments,Internship,Pair Programming,Doxim",
        objectives: `Parsed and extracted data from text files using C# and PowerShell to create billing statements.
        |Managed credit union workflows to ensure organized and optimized month-end billing deliveries.
        |Designed proof-of-concept for virtual machine manager full-stack web project.
        |Created automation scripts for the composition, storage, and archival of business-critical documents. `, // Objectives are seperated by PIPE '|'
        timeline: [
            ["May 2nd, 2022", "Internship begins."]
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
                <i>Taken from www.doxim.com: </i><br />
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
