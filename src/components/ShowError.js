import React, { useState } from 'react'
import { Snackbar as MuiSnackbar, SnackbarContent as MuiSnackbarContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  error: {
    backgroundColor: theme.palette.error.dark
  }
}));

const ShowError = ({message}) => {
  const [open, setOpen] = useState(true)
  const classes = useStyles()

  if (!message) {
    return null
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false)
  }

  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={6000}
      onClose={handleClose}
      open={open}
    >
      <MuiSnackbarContent className={classes.error} message={message.toString()} onClose={handleClose} />
    </MuiSnackbar>
  )
}

export default ShowError
