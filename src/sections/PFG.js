import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@mui/material'
import YouTubeEmbed from '../components/YouTubeEmbed'

/** @type {import("../types/section").Section} */
export default {
  meta: {
    title: 'Principal Financial Group',
    description: `## Software Engineering Intern
[Principal](https://principal.com) is a [Fortune 500®](https://fortune.com/company/principal-financial/fortune500/) American global financial investment management and insurance company headquartered in [Des Moines](https://en.wikipedia.org/wiki/Des_Moines), Iowa, U.S.`,
    banner: '/pics/pfg.png',
    complete: false,
    tags: `Java,TypeScript,JavaScript,React,Electron,Python,Spring boot,Amazon Web Services,
AWS CDK,AWS Lambda,DynamoDB,API Gateway,IaC,S3,Spotify Backstage,Webpack,UI/UX,Docker,SQL,GraphQL,Elasticsearch,
Powershell,Bash,Ansible,GitHub,CI/CD,Agile,SCRUM,DevOps,LCM,Internship,PFG,Principal`,
    objectives: `Developed full-stack GUI using React.js, Electron, TypeScript, and AWS services to facilitate on-boarding for new engineers.
        |Contributed to internal company-wide developer portal, leveraging React.js, AWS, and Spotify Backstage, enhancing the workflow of ~15K engineers daily.
        |Managed team and utilized AWS Lambda, DynamoDB, React.js, and Electron to develop a scalable solution in company-wide hackathon competition.
        |Drove and documented architectural decisions, codebase structure, and integration design to build a long-term resilient product.
        |Adhered to Agile methodologies, ensuring timely task completion, iterative development, and product deployment with GitHub and Jira.
        |Actively engaged in code reviews, offering constructive feedback to team members as well as receiving feedback to overall enhance the quality of the codebase.
        |Set up CI/CD pipelines with GitHub Actions to automate the testing and deployment process, facilitating rapid and consistent releases.
        |Collaborated with UX/UI designers and backend developers to ensure a cohesive and user-friendly experience.
        |Managed on-call responsibilities, proactively resolving hot technical issues and minimizing downtime for critical systems, ensuring quality service delivery.
        |Contributed to internal actuarial/auditing tool using Java/Spring Boot, SQL, Docker, AWS and JavaScript/React.
        |Improved product performance with asynchronous programming and run-time analysis in Java/SQL.
        |Leveraged Docker for containerization, ensuring consistent deployment environments and faster development cycles.
        |Designed and developed REST API endpoints for seamless integration with existing financial systems.`,
    timeline: [
      [
        'May 8, 2023',
        'Internship begins on DevOps team. Tools used: TypeScript/JavaScript, React, Electron.js, Python, Ansible, Bash, Powershell, Docker, GitHub, CI/CD, AWS, Artifactory.'
      ],
      [
        'July 13, 2023',
        'Joined full-stack web development company-wide developer portal team. Tools used: TypeScript/JavaScript, React, Spotify Backstage, Python, AWS (IaC), Docker, GraphQL, GitHub.'
      ],
      [
        'May 7, 2024',
        'Joined Integrated Finance Solutions (IFS) team for actuarial modernization efforts. Tools used: Java, Spring Boot, TypeScript/JavaScript, React, AWS, SQL, Docker, Excel add-in API.'
      ],
      [
        'September 2024',
        'Joined IFS Data team for building and maintaining internal company-wide data lake and respective infrastructure. Tools used: Python, AWS, CDK, IaC, Docker.'
      ]
    ]
  },
  components: { MoreInfo }
}

function MoreInfo() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <YouTubeEmbed id="RoCzo6tgUjY" />
        </Grid>
        <Grid item sm>
          <i>
            Taken from{' '}
            <a
              href="https://www.principal.com/about-us/our-company/profile-and-offerings#:~:text=English%20Company%20Profile%20(PDF)"
              target="_blank"
              rel="noreferrer"
            >
              principal.com
            </a>
            :{' '}
          </i>
          <br />
          <Typography variant="caption">
            We help people and companies in Asia, Australia, Europe, Latin
            America, and North America build and protect their financial
            well-being. We've been doing it for 143 years.
            <br />
            A FORTUNE 500® company, we're known for our innovative ideas and
            real-life solutions that help customers make financial progress, no
            matter their income or portfolio size.
            <br />
            And while we have employees around the world, we're all bound by a
            common purpose: to give you the financial tools, resources, and
            information you need so you can live the life you want. <br />
            What's most important to us ...
            <ul>
              <li>
                Meet the needs of our more than 62 million customers, who rely
                on our expertise in retirement, insurance and asset management.
              </li>
              <li>
                Attract, develop and retain the best people in the business,
                offering them a diverse and inclusive work environment in
                offices in 27 nations and territories.
              </li>
              <li>
                Give back to the communities where our employees live and work,
                supporting programs that help people learn more, earn more, and
                save more.
              </li>
              <li>
                Deliver value for our shareholders, who have placed their trust
                in us (Nasdaq: PFG). Get to know us better. Read on to find key
                facts, awards and recognition, and financial highlights.
              </li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
