import React from 'react'
import { makeStyles } from '@mui/styles'
import Chip from '@mui/material/Chip'
import Icon from '@mui/material/Icon'
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
