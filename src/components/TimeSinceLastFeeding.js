import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import {makeStyles} from '@material-ui/core/styles'
import {SnackbarContent, Typography} from '@material-ui/core'

import {formatElapsedTime} from '../time'

const useStyles = makeStyles(theme => ({
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  messageBox: {
    marginBottom: 20
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  }
}));

const SnackbarContentWrapper = (props) => {
  const classes = useStyles();
  const { variant, children } = props;

  return (
    <SnackbarContent
      className={[classes[variant], classes.messageBox].join(' ')}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <InfoIcon className={classes.icon}/>
          {children}
        </span>
      }
    />
  );
}

const TimeSinceLastFeeding = ({lastFeedingTime, nextFeedingTime}) => (
  <SnackbarContentWrapper
    variant={Date.now() > nextFeedingTime ? 'error' : 'info'}>
    It's been&nbsp;
    <Typography variant="subtitle1" component="span">{formatElapsedTime(new Date(), new Date(lastFeedingTime))}</Typography>
    &nbsp;since last feeding
  </SnackbarContentWrapper>
)

export default TimeSinceLastFeeding
