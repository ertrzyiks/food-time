import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {SnackbarContent} from '@material-ui/core'
import FeedingSourceSelector from './FeedingSourceSelector'

const useStyles = makeStyles(theme => ({
  messageBox: {
    marginBottom: 20,
    top: 90,
    zIndex:10,
    backgroundColor: theme.palette.text.hint,
    justifyContent: 'center'
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const SnackbarContentWrapper = (props) => {
  const classes = useStyles();

  return (
    <SnackbarContent
      className={[classes.messageBox].join(' ')}
      aria-describedby="client-snackbar"
      message={
        <FeedingSourceSelector {...props} />
      }
    />
  );
}

const FeedingSourceBar = (props) => {
  return (
    <SnackbarContentWrapper {...props} />
  )
}

export default FeedingSourceBar