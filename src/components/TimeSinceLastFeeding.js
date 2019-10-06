import React, { useState } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning';
import {makeStyles} from '@material-ui/core/styles'
import {SnackbarContent, Typography, Button} from '@material-ui/core'
import differenceInMinutes from 'date-fns/differenceInMinutes'

import {formatElapsedTime} from '../time'
import {useInterval} from '../useInterval'
import {UPDATE_ENTRY} from '../queries'
import {useMutation} from '@apollo/react-hooks'

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
  },
  completeFeedingButton: {
    color: '#ffe400',
    border: '1px solid #ffe400',
    fontSize: 'smaller',
    marginTop: 5
  },
  snackbarContent: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const SnackbarContentWrapper = (props) => {
  const classes = useStyles();
  const { variant, action, children } = props;

  return (
    <SnackbarContent
      className={[classes[variant], classes.messageBox].join(' ')}
      aria-describedby="client-snackbar"
      message={
      <div className={classes.snackbarContent}>
        <span id="client-snackbar" className={classes.message}>
          {
            variant === 'info'
            ? <InfoIcon className={classes.icon}/>
            : <WarningIcon className={classes.icon}/>
          }
          {children}
        </span>
        <span>{action}</span>
      </div>
      }
    />
  );
}

const TimeSinceLastFeeding = ({lastFeedingTime, nextFeedingTime, entry}) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1)
  }, 30 * 1000)

  const classes = useStyles();

  const infoText = differenceInMinutes(new Date(), new Date(lastFeedingTime)) > 5
  ? <>It's been&nbsp;<Typography variant="subtitle1" component="span">{formatElapsedTime(new Date(), new Date(lastFeedingTime))}</Typography>&nbsp;since last feeding </>
  : <>Feeding in progress</>

  const [updateEntry] = useMutation(UPDATE_ENTRY)

  const duration = entry
    ? differenceInMinutes(Date.now(), entry.time * 1000)
    : null

  const onCompleteFeeding = () => {
    updateEntry({
      variables: {
        id: entry.id,
        feeding_duration: duration
      }
    })
  }

  const completeFeedingComponent = !entry || entry.type === 'bottle' || entry.feeding_duration || !duration || duration < 5 || duration > 30
    ? null
    : <Button variant='outlined' className={classes.completeFeedingButton} size="small" onClick={onCompleteFeeding}>
      Complete now
    </Button>


  return <SnackbarContentWrapper
    class='mui-fixed'
    variant={Date.now() > nextFeedingTime ? 'error' : 'info'}
    action={completeFeedingComponent}>
    {infoText}
  </SnackbarContentWrapper>
}

export default TimeSinceLastFeeding
