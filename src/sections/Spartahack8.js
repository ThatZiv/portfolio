import React from "react";
import { Grid } from "@material-ui/core";
import Contributions from "../components/Contributions";
import Gallery from "../components/Gallery";
import SocialMedia from "../components/SocialMedia";
import Status from "../components/Status";
import Generic from "../components/Generic";

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: "Spartahack 8 Hackathon",
    description: `[SpartaHack 8](https://spartahack.com), 
            hosted by [Michigan State University](https://msu.edu), is a 24-hour in-person hackathon competition.
            In this competition, our team created Earthly, 
            a full-stack web application that tracks your carbon emission savings. Every time you walk, bike, or use public transit, 
            you can use Earthly to measure against everyday units, compare with your friends, or complete challenges.
            In total, there were over **91 projects** by **500 participants** across **24 different schools**. 
            Our team was the recipient of the _Best Hack for Environmental Sustainability_ award.`,
    banner: "/pics/spartahack8-ppl.PNG",
    complete: true,
    tags: "JavaScript,React.js,HTML/CSS,Supabase,BaaS,PostgreSQL,Agile,Pair Programming,Git,CI/CD,Hackathon,Competition,Team Coordination",
    objectives: `Conducted meetings with team members to stay on track for project deployment using Agile methodology.|
            Setup frontend website with React and PicoCSS.|
            Integrated Supabase backend to frontend using PostgreSQL row-level security (RLS).|
            Facilitated team members' duties during project development.`,
    timeline: [
      ["January 26, 2023", "Assembled team."],
      ["January 28, 2023", "Brainstormed for ideas."],
      ["January 28, 2023", "Created frontend with React and PicoCSS."],
      [
        "January 28, 2023",
        "Integrated Supabase Backend-as-a-Service (BaaS) with frontend.",
      ],
      [
        "January 29, 2023",
        "Created user-authentication with PostgreSQL row-level security (RLS).",
      ],
      ["January 29, 2023", "Finalized project submission."],
      [
        "January 29, 2023",
        'Awarded "Best Hack for Environmental Sustainability."',
      ],
    ],
  },
  components: { Pictures, Links, Statistics, Description },
};

function Pictures() {
  return (
    <Gallery
      images={[
        {
          label: "Presentations/Judging (1/2)",
          imgPath: "/pics/ext/sphack8/2.jpg",
        },
        {
          label: "Presentations/Judging (2/2)",
          imgPath: "/pics/ext/sphack8/1.jpg",
        },
        { label: "Award Ceremony (1/2)", imgPath: "/pics/ext/sphack8/3.jpg" },
        { label: "Award Ceremony (2/2)", imgPath: "/pics/ext/sphack8/4.jpg" },
        { label: "Winning Slide", imgPath: "/pics/ext/sphack8/5.png" },
      ]}
    />
  );
}

function Description() {
  return (
    <Generic
      entries={[
        {
          title: "Inspiration",
          content:
            "We were inspired by the growing problem of climate change to create a project that addresses the main contributor to global warming at the individual level: your carbon footprint. By creating a website where people can view and compare their carbon footprint, we can motivate people to make changes to their lifestyle to reduce their environmental impact. ",
        },
        {
          title: "What it does",
          content:
            "Our website allows people to upload trips they make to see what the carbon impact of their trip was. By taking positive actions, such as taking public transport, cycling, or walking, we allow people to see how their decisions impact their carbon footprint. You can also compare your footprint to others locally to see where you match up and compete in challenges where you try to keep your footprint below a certain level. Finally, there is a page where you can learn more about how your carbon footprint affects global warming and other ways you can reduce it outside of just your transportation.",
        },
        {
          title: "How we built it",
          content:
            "The app was primarily built with React and Javascript for the front-end. For the back-end, we used Supabase and PostgreSQL.",
        },
        {
          title: "Challenges we ran into",
          content:
            "We had issues with understanding the nuances of row-level security, and trouble overestimating what we could accomplish within the limited time window.",
        },
        {
          title: "Accomplishments that we're proud of",
          content:
            "We are proud of our teamwork and our ability to collaborate to create a product better than any of us would be able to produce on our own.",
        },
        {
          title: "What we learned",
          content:
            "We learned the importance of brainstorming and fully creating our idea and workflow before beginning to code in order to save time and energy.",
        },
        {
          title: "What's next for earthly",
          content:
            "In the future, we will work to expand Earthly to be available as a mobile app. Furthermore, we want to connect earthly with smart devices, such as watches, to automate the tracking process without our users having to manually input their data. Finally, we hope to not just watch the carbon footprint of transportation, but also that of other activities that are detrimental to the environment, such as leaving the lights on or setting the air conditioner at a very low temperature.",
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
          name="Project Submission"
          icon="fa-solid fa-envelope-circle-check"
          url="https://devpost.com/software/earthly-dzcu1h"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          name="Live Preview"
          icon="fa-solid fa-globe"
          url="https://earthly.zavaar.net/"
        />
      </Grid>
      <Grid item>
        <SocialMedia
          icon="fa-brands fa-github"
          url="https://github.com/mlyoung25/earthly"
        />
      </Grid>
      <Grid xs={12} item>
        <Status url="https://earthly.zavaar.net/" />
      </Grid>
    </Grid>
  );
}

function Statistics() {
  return <Status paper url="https://earthly.zavaar.net/" />;
}
/* 
function Contribs() {
    return <Contributions repos={[
        "WSU-Society-of-Computer-Developers/workshops",
        "WSU-Society-of-Computer-Developers/waynehacks-website"
    ]} title="WSU SCD Repository" />
} */
