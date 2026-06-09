/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: 'Card title',
    banner: 'card picture (ex. pic.png)',
    complete: false,
    tags: 'Tags,Are,Separated,Only,With,Commas',
    objectives: `Usually from resume.`, // Objectives are separated by PIPE '|'
    description: `Card content description`,
    timeline: [['December 31, 1969', 'When clocks started to count up!']]
  },
  components: { Links, Statistics }
}

export default Section

function Links() {
  return <div>...</div>
}

function Statistics() {
  return <div>...</div>
}
