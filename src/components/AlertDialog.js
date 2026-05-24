import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContentText from '@mui/material/DialogContentText'
import { UserContext } from '../contexts'
import { indigo } from '@mui/material/colors'
// https://stackoverflow.com/questions/65256599/how-to-make-snackbar-a-global-component-withcontext
const btnStyle = {
  color: indigo[400]
}
// TODO: Replace this [SocialMedia btns] with router page for redirect links (like linkedin)
const AlertDialog = (props) => {
  const { title, children, callback, open } = props
  /* const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  */
  const handleAbort = () => {
    dispatch({
      type: 'UI_dialog',
      open: false,
      content: '',
      title: '',
      callback: () => {}
    })
  }
  const [, dispatch] = React.useContext(UserContext)
  return (
    <Dialog
      open={open}
      onClose={handleAbort}
      data-testid="alert-dialog"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button style={btnStyle} onClick={handleAbort}>
          Cancel
        </Button>
        <Button style={btnStyle} onClick={callback} autoFocus>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default AlertDialog
