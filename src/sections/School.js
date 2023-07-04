import Generic from "../components/Generic";
import Markdown from "../components/Markdown";
const GPA = "3.91";
/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: "Troy High School",
    banner: "pics/troy_high.jpeg",
    complete: true,
    tags: "Troy High School,THS,School,High School,Education,Extracurricular,Clubs,Classes,Coursework,Projects,Leadership,AP,Advanced Placement",
    description: `## High School Diploma • **${GPA} GPA**
[Troy High School](https://www.troycolts.org) has been recognized by U.S. News and World Report, Newsweek, NICHE, and many others as one of the best high schools in the nation.
Troy High School is a public high school in Troy, Michigan, United States. It is a part of the Troy School District. 
It enrolls approximately 2,000 students in grades 9-12.`,
    timeline: [
      ["Fall 2017", "Start date."], // club joins, promotions, etc
      ["November 2019", "Founded Troy High Cycling Club."],
      ["Spring 2020", "Elected event chair of Troy High Project Lead."],
      ["Spring 2021", "Graduation."],
    ],
  },
  components: { Awards, Coursework, Grade, Organizations },
};

export default Section;

function Grade() {
  return <div>{GPA}/4 Unweighted Grade Point Average (GPA)</div>;
}

function Organizations() {
  return (
    <Markdown>{`
* [Troy High Cycling Club](https://thatziv.github.io/cyclingclubths) - President
* [Troy High Project Lead](https://www.thsprojectlead.com/) - Event Chair
* [National Honor Society](https://www.nationalhonorsociety.org/) - Member
  `}</Markdown>
  );
}

function Coursework() {
  return (
    <Generic
      entries={[
        {
          title: "AP® Computer Science Principles",
          content:
            "Learn the principles that underlie the science of computing and develop the thinking skills that computer scientists use. You'll work on your own and as part of a team to creatively address real-world issues using the tools and processes of computation.",
        },
        {
          title: "AP® Macroeconomics",
          content:
            "Explore the principles of economics that apply to an economic system as a whole. You'll use graphs, charts, and data to analyze, describe, and explain economic concepts.",
        },
        {
          title: "AP® Microeconomics",
          content:
            "Study the principles of economics that apply to the behavior of individuals within an economic system. You'll use graphs, charts, and data to analyze, describe, and explain economic concepts.",
        },
        {
          title: "AP® Psychology",
          content:
            "Explore the ideas, theories, and methods of the scientific study of behavior and mental processes. You'll examine the concepts of psychology through reading and discussion and you'll analyze data from psychological research studies.",
        },
        {
          title: "AP® Calculus BC",
          content:
            "Explore the concepts, methods, and applications of differential and integral calculus, including topics such as parametric, polar, and vector functions, and series. You'll perform experiments and investigations and solve problems by applying your knowledge and skills. ",
        },
        {
          title: "AP® Environmental Science",
          content:
            "Explore and investigate the interrelationships of the natural world and analyze environmental problems, both natural and human-made. You'll take part in laboratory investigations and field work.",
        },
        {
          title: "AP® Physics C: Mechanics",
          content:
            "Explore concepts such as kinematics; Newton's laws of motion, work, energy, and power; systems of particles and linear momentum; rotation; oscillations; and gravitation. You'll do hands-on laboratory work and in-class activities to investigate phenomena and use calculus to solve problems.",
        },
        {
          title: "AP® Physics C: Electricity and Magnetism",
          content:
            "Explore concepts such as electrostatics; conductors, capacitors, and dielectrics; electric circuits; magnetic fields; and electromagnetism. You'll do hands-on laboratory work to investigate phenomena.",
        },
      ]}
    />
  );
}

function Awards() {
  return (
    <Generic
      entries={[
        {
          title: "Honor Roll",
          content: `You must maintain a grade point average (GPA) of 3.0 or higher.`,
        },
        {
          title: "National Honor Society (NHS)",
          content: `[NHS](https://www.nationalhonorsociety.org/) - You must have an unweighted GPA of 3.0 or higher. You must have completed 15 service hours.
        `,
        },
        {
          title: "AP® Scholar with Honor",
          content: `[Granted](https://apstudents.collegeboard.org/awards-recognitions/ap-scholar-award#:~:text=more%20AP%20Exams.-,AP%20Scholar%20with%20Honor,-Granted%20to%20students) to students who receive an average score of at least 3.25 on all AP Exams taken, and scores of 3 or higher on four or more of these exams.`,
        },
      ]}
    />
  );
}
