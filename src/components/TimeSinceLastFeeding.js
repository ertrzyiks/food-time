import React, { useState } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning';
import {makeStyles} from '@material-ui/core/styles'
import {SnackbarContent, Typography} from '@material-ui/core'
import differenceInMinutes from 'date-fns/differenceInMinutes'

import {formatElapsedTime} from '../time'
import {useInterval} from '../useInterval';

const useStyles = makeStyles(theme => ({
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  messageBox: {
    marginBottom: 20,
    position: 'sticky',
    top: 70,
    zIndex:10
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
          {
            variant === 'info'
            ? <InfoIcon className={classes.icon}/>
            : <WarningIcon className={classes.icon}/>
          }
          {children}
        </span>
      }
    />
  );
}



const TimeSinceLastFeeding = ({lastFeedingTime, nextFeedingTime}) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1)
  }, 30 * 1000)

  const infoText = differenceInMinutes(new Date(), new Date(lastFeedingTime)) > 5
  ? <>It's been&nbsp;<Typography variant="subtitle1" component="span">{formatElapsedTime(new Date(), new Date(lastFeedingTime))}</Typography>&nbsp;since last feeding </>
  : <>Feeding in progress...</>

  return <SnackbarContentWrapper
    class='mui-fixed'
    variant={Date.now() > nextFeedingTime ? 'error' : 'info'}>
    {infoText}
  </SnackbarContentWrapper>
}

export default TimeSinceLastFeeding
