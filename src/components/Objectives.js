import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
/* import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts'; */
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: theme.palette.background.default
  }
}))

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />
// }

/** @param {import("../types/comps/Objectives").Objectives} props */
export default function SimpleList(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" key={props.list} aria-label="secondary">
        {/* <Typography variant='h4'>
                    <Typography variant='subtitle'>
                        &nbsp;Objectives
                    </Typography>
                </Typography> */}
        {props.list.split('|').map((objective) => {
          return (
            <ListItem key={objective} divider>
              <ListItemText primary={objective} />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
