import { Grid, Typography, Divider } from '@mui/material'
import React from 'react'
import Markdown from './Markdown'

/** @param {import("../types/comps/Generic").Generic} props */
export default function Generic(props) {
  return (
    <Grid direction="row" container>
      {props.entries.map(({ title, content }) => (
        <Grid key={`${title}:${content}`} xs={12} item>
          <Typography
            variant="h4"
            style={{ fontFamily: 'Blinker, sans-serif' }}
          >
            {title}
          </Typography>
          <Typography variant="body1">
            <Markdown>{content}</Markdown>
          </Typography>
          <Divider style={{ marginBottom: 15 }} />
        </Grid>
      ))}
    </Grid>
  )
}
