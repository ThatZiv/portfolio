import React from "react";
import { Grid } from "@material-ui/core";
import Contributions from "../components/Contributions";
import Lecture from "../components/Lecture";
import SocialMedia from "../components/SocialMedia";
import Status from "../components/Status";
import Gallery from "../components/Gallery";
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

// import { SectionType } from "../types/section"
/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: "Society of Computer Developers",
    description: `## Vice President
[Society of Computer Developers](https://getinvolved.wayne.edu/organization/scd) (SCD) at [Wayne State University](https://wayne.edu) is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. We invite industry speakers, allow members to present a project they developed, give organization updates, and practice coding problems. We also host events which include, skill-building workshops, hackathons, coding nights, and social events!`,
    banner: "/pics/scd.png",
    complete: false,
    tags: "TypeScript,JavaScript,Python,C/C++,HTML/CSS,Docker,CI/CD,Full Stack,REST API,DOM,MongoDB,React.js,Agile,Pair Programming,Lecturing,SCD,GitHub Actions,Version Control",
    objectives: `Created and hosted programming-related workshop events for students.
|Tutored and assisted students with coursework and other programming-related content.
|Developed and managed official club website to display dynamic content using React, Express, and MongoDB.`, // Objectives are separated by PIPE '|'
    timeline: [
      ["September 2021", "Joined SCD as a member."],
      ["October 2021", "Recruited as Secretary."],
      [
        "November 2021",
        'Participated in WSU SCD 2021 Hackathon ("Most Technical" award).',
      ],
      ["February 2022", "Promoted to Software Lead."],
      [
        "February 8, 2022",
        "Participated in WSU SCD 2022 Hackathon (3rd place).",
      ],
      ["February 25, 2022", "Hosted web scraping workshop."],
      ["April 17, 2022", "Hosted REST API workshop."],
      ["August 2022", "Began development of official website."],
      [
        "September 2022",
        "Orchestrated month-long dynamic website project with weekly meetings.",
      ],
      [
        "October 2022",
        "Completed preview build of club website for production.",
      ],
      ["October 19, 2022", "Hosted Docker & Containerization workshop."],
      [
        "November 2022",
        'Completed and deployed website to "scd.cs.wayne.edu".',
      ],
      ["November 28, 2022", "Hosted React.js (web framework) workshop."],
      ["January 2023", "Promoted to Vice President."],
      ["March 3, 2023", "Hosted JavaScript DOM workshop."],
      ["March 4, 2023", "Co-hosted Google Firebase workshop."],
      [
        "March 5, 2023",
        'Organized and hosted "WayneHacks" - Wayne State\'s 3rd 48-hour hackathon.',
      ],
    ],
  },
  components: { Lectures, Contribs, Links, Pictures },
};

function Lectures() {
  return (
    <Grid container>
      {/* cspell:disable */}
      <Lecture title="Google Firebase" YouTubeID="nUOMTViKsko" />
      <Lecture title="JavaScript DOM" YouTubeID="HTxYtiTAsZU" />
      <Lecture title="React.js" YouTubeID="S7wWg11tZxM" />
      <Lecture title="Docker" YouTubeID="MrE1uvzuJW8" />
      <Lecture title="Full Stack (REST API Part 2)" YouTubeID="9OlMQpivP2Q" />
      <Lecture title="REST API Development" YouTubeID="UAWJ37Dmvz0" />
      <Lecture title="Web Scraping" YouTubeID="WOwC2NeDyF4" />
      <Lecture title="Dynamic Website Project (1/4)" YouTubeID="tyCX7s3QfyY" />
      <Lecture title="Dynamic Website Project (2/4)" YouTubeID="rXnBDTKaH3Y" />
      <Lecture title="Dynamic Website Project (3/4)" YouTubeID="xxyelsQcz58" />
      <Lecture title="Dynamic Website Project (4/4)" YouTubeID="AQg_lSHrwHs" />
      {/* cspell:enable */}
    </Grid>
  );
}

function Pictures() {
  return (
    <Gallery
      images={[
        {
          label: "SCD at Festifall (myself 2nd from the left)",
          imgPath:
            "https://se-images-blob.campuslabs.com/documents/204/f0eaec97-9199-4aff-279a-08dab6692024/1500.jpg",
        },
        {
          label: "General Body Meetings",
          imgPath:
            "https://se-images-blob.campuslabs.com/documents/204/aee7b032-28ee-4514-dd13-08dabb5f3f2a/600.jpg",
        },
      ]}
    />
  );
}

function Links() {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <SocialMedia
          name="Website"
          icon="fa-solid fa-globe"
          url="https://scd.cs.wayne.edu"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="GetInvolved"
          icon="fa-solid fa-graduation-cap"
          url="https://getinvolved.wayne.edu/organization/scd"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-instagram"
          url="https://www.instagram.com/scd_wsu/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-linkedin"
          url="https://www.linkedin.com/company/society-of-computer-developers/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-facebook"
          url="https://www.facebook.com/scdwsu"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-twitter"
          url="https://twitter.com/scd_wsu"
        />
      </Grid>
      <Grid xs={12} item>
        <Status url="https://scd.cs.wayne.edu/" />
      </Grid>
    </Grid>
  );
}

function Contribs() {
  return (
    <Grid container>
      <Grid item>
        <Contributions
          repos={[
            "WSU-Society-of-Computer-Developers/workshops",
            "WSU-Society-of-Computer-Developers/website2",
            "WSU-Society-of-Computer-Developers/dynamic-website-project",
            "WSU-Society-of-Computer-Developers/verify-service",
            "WSU-Society-of-Computer-Developers/waynehacks-website",
          ]}
          title="WSU SCD Repository"
        />
      </Grid>
      <Grid item>
        <Status paper url="https://scd.cs.wayne.edu/" />
      </Grid>
    </Grid>
  );
}
