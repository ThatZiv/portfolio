export default {
    meta: {
        title: "Doxim",
        description: `__Implementation Programming Intern__ at Doxim. Doxim is the customer communications management and engagement technology leader serving highly regulated markets, including financial services, utilities and healthcare. We provide omnichannel document and payment solutions that transform experiences and strengthen engagement throughout the entire lifecycle [www.doxim.com](https://www.doxim.com).`,
        banner: "/pics/doxim.png",
        complete: false,
        tags: "C#,PowerShell,MySQL,Agile,Scripting,Virtualization Environments,Internship,Pair Programming",
        objectives: `Parsed and extracted data from text files using C# and PowerShell to create billing statements.
        |Managed credit union workflows to ensure organized and optimized month-end billing deliveries.
        |Designed proof-of-concept for virtual machine manager full-stack web project.
        |Created automation scripts for the composition, storage, and archival of business-critical documents. `, // Objectives are seperated by PIPE '|'
        timeline: [
            ["May 2nd, 2022", "Internship begins."]
        ],
    }, components: { MoreInfo, statistics }
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

function statistics() {
    return (<div>
        ...
    </div>)
}
