import Generic from '../components/Generic'
// import { Typography } from "@material-ui/core";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";

// TODO: add more to this section
const GPA = '3.97'
/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: 'Wayne State University',
    banner: 'pics/wsu.png',
    complete: true, // to show the date range on the banner
    tags: 'Wayne State University,WSU,University,College,Education,Extracurricular,Clubs,Organizations,Classes,Coursework,Projects,Leadership',
    description: `## Bachelor of Science in Computer Science • **${GPA} GPA**
---
## Master of Science in Computer Science • Artificial Intelligence Concentration
---
[Wayne State University](https://wayne.edu) is a public research university in Detroit, Michigan. 
It is Michigan's third-largest university. Founded in 1868, Wayne State consists of 
13 schools and colleges offering approximately 350 programs to nearly 24,000 graduate and undergraduate students.`,
    timeline: [
      ['Fall 2021', 'Start date.'], // TODO add promotions et al
      ['Fall 2024', 'Start accelerated graduate program (AGRADE).'],
      [
        'Spring 2025',
        "Expected graduation date for Bachelor's in Computer Science."
      ],
      [
        'Spring 2026',
        "Expected graduation date for Master's in Computer Science."
      ]
    ]
  },
  components: { Coursework, Awards, Grade }
}

export default Section

function Grade() {
  return <div>{GPA}/4 Unweighted Grade Point Average (GPA)</div>
}

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
      this.name = name
      this.title = title
      this.description = description
      let course = {
        title,
        content: `## [${name}](${this.getCoursePage()})
${description}`
      }
      return course
    }
    getCoursePage() {
      return `https://bulletins.wayne.edu/search/?P=${encodeURIComponent(
        this.name
      )}`
    }
  }
  const courses = [
    new Course({
      name: 'CSC 1100',
      title: 'Programming and Problem Solving',
      description:
        'Problem solving with algorithms, and their realization as computer programs using a structured, general purpose programming language; data types, operators, expressions, assignment, input and output, selection and repetition control structures; modularity and procedural abstraction using functions with parameters; structured data types, arrays, pointers and strings.Problem solving with algorithms, and their realization as computer programs using a structured, general purpose programming language; data types, operators, expressions, assignment, input and output, selection and repetition control structures; modularity and procedural abstraction using functions with parameters; structured data types, arrays, pointers and strings.'
    }),
    new Course({
      name: 'CSC 1500',
      title: 'Fundamental Structures in Computer Science',
      description:
        'Introduction to fundamental control and data structures in computer science such as algorithms and complexity; recursive algorithms; program correctness using the predicate calculus; reasoning about algorithms using mathematical induction; divide and conquer algorithms; recurrence relations; set properties and their computation; and computing with relations. Graph properties and their computation, and tree properties and their computation, will be covered if time permits.'
    }),
    new Course({
      name: 'CSC 2110',
      title: 'Computer Science I',
      description:
        'Rigorous introduction to fundamental object-oriented concepts and techniques of computer programming using an object-oriented language. Introduction to data abstraction; design of abstract data types. Introduction to recursion; programming with generic data types; inheritance; polymorphism; and exception handlers. Concepts applied to console programs and event-driven programming'
    }),
    new Course({
      name: 'CSC 3010',
      title: 'Ethics in Computer Science',
      description:
        'Students will study the ethical and legal issues that arise with the usage and development of computing technology. Students will learn the responsibilities of the computer professionals and how to make appropriate decisions when faced with legal and ethical issues in computing.'
    }),
    new Course({
      name: 'CSC 2200',
      title: 'Computer Science II',
      description:
        'Design and implementation of fundamental abstract data types of computer science (such as stacks, queues, trees, lists, hashing, and graphs), using an object-oriented language. Programming requirements include the implementation of abstract data types using arrays and dynamic links; recursion; sorting and searching; hashing; and string processing. Introduction to algorithm analysis.'
    }),
    new Course({
      name: 'CSC 3750',
      title: 'Introduction to Web Technology',
      description:
        'Understanding the Internet using several access methods; required software and tools. Topics include: e-mail, FTP, Telnet, Gopher, Archie, Newsgroups, WWW, HTML, CGI and PHP scripting and how to create an active web site.'
    }),
    new Course({
      name: 'MAT 2030',
      title: 'Calculus III',
      description:
        'Multi-variable calculus with applications. Vectors and vector functions in two and three dimensions; functions of several variables; differentiation; integration; vector calculus.'
    }),
    new Course({
      name: 'MAT 2250',
      title: 'Linear Algebra',
      description:
        'Systems of linear equations, matrices, vector spaces, basis, dimension, inner products, linear transformations and eigenvalues. Applications presented. '
    }) // TODO: show grades too?
  ]
  return <Generic entries={courses} />
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
[Winter 2023](https://engineering.wayne.edu/news/undergraduate-deans-list-for-winter-2023-53793#cs),
[Fall 2023](https://engineering.wayne.edu/news/undergraduate-deans-list-for-fall-2023-61446#cs),
[Winter 2024](https://engineering.wayne.edu/news/undergraduate-deans-list-for-winter-2024-62445#cs). This award is given to students who have achieved a GPA of 3.5 or higher as a full-time student.`
        },
        {
          title: 'Warrior Award',
          content:
            'Awarded Fall 2021-Winter 2025. The [Warrior Award](https://wayne.edu/scholarships/warrior) is up to $6,000 per year for four consecutive years and is offered to the strongest admissions applicants based on GPA and ACT/SAT scores.'
        },
        {
          title: '50th Anniversary Engineering Alumni Scholarship',
          content:
            "Awarded Fall 2024-2025. 'Established to recognize scholastic achievement' - More [info](https://web.archive.org/web/20240708092425/https://engineering.wayne.edu/admissions/scholarships/undergrad-endowed#ann-50)."
        },
        {
          title: 'Harley Ellis Devereaux Endowed Scholarship Award',
          content:
            'Awarded Fall 2024-2025. More [info](https://web.archive.org/web/20240708092425/https://engineering.wayne.edu/admissions/scholarships/undergrad-endowed#devereaux).'
        }
      ]}
    />
  )
}
