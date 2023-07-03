import Generic from "../components/Generic";
/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: "Troy High School",
    banner: "pics/troy_high.jpeg",
    complete: true,
    tags: "Tags,Are,Separated,Only,With,Commas",
    objectives: `Usually from resume.`, // Objectives are separated by PIPE '|'
    description: `## High School Diploma
Troy High school has been recognized by U.S. News and World Report, Newsweek, NICHE, and many others as one of the best high schools in the nation.
Troy High School is a public high school in Troy, Michigan, United States. It is a part of the Troy School District. 
It enrolls approximately 2,000 students in grades 9-12.`,
    timeline: [
      ["Fall 2017", "Start date."],
      ["Spring 2021", "Graduation."],
    ],
  },
  components: { Links, Awards },
};

export default Section;

// TODO: add coursework generic for AP classes

function Links() {
  return <div>...</div>; /// TODO: add links
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

function statistics() {
  return <div>...</div>;
}
