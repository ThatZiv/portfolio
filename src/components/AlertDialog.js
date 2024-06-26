import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContentText } from '@material-ui/core'
import { UserContext } from '../contexts'
import { indigo } from '@material-ui/core/colors'
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
