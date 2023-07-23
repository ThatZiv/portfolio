import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import Icon from '@material-ui/core/Icon'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.1)
    }
  }
}))
// https://mui.com/components/material-icons/
/** @param {import("../types/comps/Tags").Tags} props*/
export default function Tags(props) {
  const classes = useStyles()
  const tagId = props.children?.replace(' ', '_')
  return (
    <div className={classes.root}>
      <Chip
        tag={tagId}
        color="primary"
        icon={<Icon className="material-icons-outlined">tag</Icon>}
        label={props.children}
      />
    </div>
  )
}
