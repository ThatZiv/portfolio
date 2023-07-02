import Generic from "../components/Generic";
// import { Typography } from "@material-ui/core";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
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
  class Course {
    /**
     * @constructor
     * @param {Object} options - The options for creating a new person.
     * @param {string} options.name - The name of the person.
     * @param {string} options.title - The title of the person.
     * @param {string} options.description - The description of the person.
     */
    constructor({ name, title, description }) {
      this.name = name;
      this.title = title;
      this.description = description;
      let course = {
        title,
        content: `## [${name}](${this.getCoursePage()})
${description}`,
      };
      return course;
    }
    getCoursePage() {
      return `https://bulletins.wayne.edu/search/?P=${encodeURIComponent(
        this.name
      )}`;
    }
  }
  const courses = [
    new Course({
      name: "CSC 1100",
      title: "Programming and Problem Solving",
      description:
        "Problem solving with algorithms, and their realization as computer programs using a structured, general purpose programming language; data types, operators, expressions, assignment, input and output, selection and repetition control structures; modularity and procedural abstraction using functions with parameters; structured data types, arrays, pointers and strings.Problem solving with algorithms, and their realization as computer programs using a structured, general purpose programming language; data types, operators, expressions, assignment, input and output, selection and repetition control structures; modularity and procedural abstraction using functions with parameters; structured data types, arrays, pointers and strings.",
    }),
    new Course({
      name: "CSC 1500",
      title: "Fundamental Structures in Computer Science",
      description:
        "Introduction to fundamental control and data structures in computer science such as algorithms and complexity; recursive algorithms; program correctness using the predicate calculus; reasoning about algorithms using mathematical induction; divide and conquer algorithms; recurrence relations; set properties and their computation; and computing with relations. Graph properties and their computation, and tree properties and their computation, will be covered if time permits.",
    }),
    new Course({
      name: "CSC 2110",
      title: "...",
      description: "...", // TODO get server1 back up so i can continue
    }),
    new Course({
      name: "CSC 2200",
      title: "Data Structures and Algorithms",
      description:
        "Design and implementation of fundamental abstract data types of computer science (such as stacks, queues, trees, lists, hashing, and graphs), using an object-oriented language. Programming requirements include the implementation of abstract data types using arrays and dynamic links; recursion; sorting and searching; hashing; and string processing. Introduction to algorithm analysis.",
    }),
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
