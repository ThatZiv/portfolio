import { Typography } from "@material-ui/core";
import Generic from "../components/Generic";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: "Wayne State University",
    banner: "pics/wsu.png",
    complete: true,
    tags: "Wayne State University,WSU,University,College,Education",
    description: `## Bachelor of Science in Computer Science
Wayne State University is a public research university in Detroit, Michigan. 
It is Michigan's third-largest university. Founded in 1868, Wayne State consists of 
13 schools and colleges offering approximately 350 programs to nearly 24,000 graduate and undergraduate students.`,
    timeline: [
      ["August 2021", "Start date."],
      ["May 2025", "Expected graduation date."],
    ],
  },
  components: { Coursework, Awards },
};

export default Section;

function Coursework() {
  const coursePage = (id) =>
    `https://bulletins.wayne.edu/search/?P=${encodeURIComponent(id)}`;
  // TODO: find better way to do courseworks
  const courses = [
    {
      title: "CSC 1100",
      content: () =>
        `[Problem Solving and Programming](${coursePage(this.title)})`,
    },
    {
      title: "CSC 1500",
      content: "Fundamental Structures in Computer Science.",
    },
    {
      title: "CSC 2200",
      content: "Computer Science II - Data Structures and Algorithms.",
    },
  ];
  console.log(courses);
  return <Generic entries={courses} />;
}

function Awards() {
  return (
    <Generic
      entries={[
        {
          title: "Dean's List",
          content: `Awarded [Fall 2021](https://engineering.wayne.edu/news/undergraduate-deans-list-for-fall-2021-46885#cs), 
[Winter 2022](https://engineering.wayne.edu/news/undergraduate-deans-list-for-winter-2022-48391#cs),
[Fall 2022](https://engineering.wayne.edu/news/undergraduate-deans-list-for-fall-2022-50373#cs), 
Fall 2023
`,
        },
        {
          title: "Warrior Award",
          content:
            "Awarded Fall 2021-Winter 2025. The [Warrior Award](https://wayne.edu/scholarships/warrior) is up to $6,000 per year for four consecutive years and is offered to the strongest admissions applicants based on GPA and ACT/SAT scores.",
        },
      ]}
    />
  );
}
