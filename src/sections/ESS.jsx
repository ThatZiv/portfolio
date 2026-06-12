import { Link, Typography } from '@mui/material'

/**
 * @type {import("../types/section").Section}
 */
const Section = {
  meta: {
    title: 'Engineering Student Senate',
    banner: '/pics/ess_banner.png',
    complete: true,
    tags: 'Tags,Are,Separated,Only,With,Commas', // TODO
    objectives: `Usually from resume.|test`, // TODO:
    description: `
## President

Wayne State University (WSU) [Engineering Student Senate (ESS)](https://www.linkedin.com/company/wayne-state-university-engineering-student-senate/) is a student organization that serves as a liaison between the student body and the College of Engineering administration. We advocate for the needs and concerns of engineering students, organize events and initiatives to enhance the student experience, and work to foster a sense of community among engineering students.
`,
    //  As President, I lead the executive board in planning and executing our initiatives, representing the student body in meetings with administration, and ensuring that our organization runs smoothly and effectively.
    timeline: [
      ['August 2023', 'Joined ESS as Vice President for the 2023-2024 term.'],
      ['August 2024', 'Continued as Vice President for the 2024-2025 term.'],
      ['August 2025', 'Elected President of ESS for 2025-2026 term.']
    ],
    prechildren: (
      <div>
        <iframe
          className="Media"
          src="https://www.youtube-nocookie.com/embed/uImDRtmVDS4?si=Q6TORfq0ojXl8XQc&amp;start=2332&amp;autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{ width: '100%', height: '100%', minHeight: 350 }}
        ></iframe>
        <Typography variant="caption" display="block" sx={{ mb: 1 }}>
          ESS President (myself) speaking at the{' '}
          <Link
            href="https://web.archive.org/web/20260412091749/https://events.wayne.edu/2026/05/08/2026-professional-society-induction-and-order-of-the-engineer-ceremony-106682"
            target="_blank"
            className="Link"
            rel="noopener noreferrer"
          >
            66th Annual Induction ceremony
          </Link>{' '}
          at Wayne State University College of Engineering.
        </Typography>
      </div>
    )
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
