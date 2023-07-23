import React from 'react'
import { Grid, Tooltip } from '@material-ui/core'

// this component utilizes github  gh-card.dev picture api
export default function Contributions(props) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      {props.repos.map((val, index) => (
        <Grid key={`repo:${index}:${val}`} item>
          <Tooltip placement="top" title={'https://github.com/' + val}>
            <a
              target="_blank"
              rel="noreferrer"
              href={'https://github.com/' + val}
            >
              <img
                alt={`${props.title} #${index + 1}`}
                className="Media"
                src={`https://gh-card.dev/repos/${val}.svg?fullname=`}
              />
            </a>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  )
}
