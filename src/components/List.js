import React from 'react';
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'
import differenceInHours from 'date-fns/differenceInHours'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import AddIcon from '@material-ui/icons/Add'

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Fab,
  SnackbarContent
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import ShowError from './ShowError'
import GrouppedList from './GrouppedList'

import startOfDay from 'date-fns/startOfDay'
import addMinutes from 'date-fns/addMinutes'

import { formatElapsedTime } from '../time'

import { GET_ENTIRES } from '../queries'

const CREATE_ENTRY = gql`
  mutation CreateEntry($spaceId: String!, $time: Int!) {
    createEntry(spaceId: $spaceId, time: $time) {
      id
      time
      extra_food
    }
  }
`

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#3e4451',
  },
  avatar: {
    margin: 15,
    width: 40,
    height: 40,
  },
  toolbar: {
    justifyContent: 'space-between',
    height: 70
  },
  title: {
    margin: 15,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2
  },
  listWrapper: {
    marginTop: theme.spacing(2)
  }
}))

function SnackbarContentWrapper(props) {
  const useSnackbarStyles = makeStyles(theme => ({
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
  }));

  const classes = useSnackbarStyles();
  const { variant, children } = props;

  return (
    <SnackbarContent
      className={[classes[variant], classes.messageBox].join(' ')}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
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

function EntryList({match, profile}) {
  const classes = useStyles();

  const spaceId = match.params.id

  const { loading, data, error } = useQuery(GET_ENTIRES, {variables: {spaceId}})
  const hasData = !loading && !error

  const [createEntry, {loading: creationLoading, error: creationError}] = useMutation(CREATE_ENTRY, {
    refetchQueries: ['getEntries']
  })

  const sortedDataEntries = hasData && data.entries.slice().sort((e1, e2) => e2.time - e1.time)

  const entries = hasData && sortedDataEntries.reverse().reduce((acc, entry) => {
    if (acc.length > 0) {
      const last = acc[acc.length - 1]

      return [...acc, {
        ...entry,
        meantime: formatElapsedTime(new Date(entry.time * 1000), new Date(last.time * 1000))
      }]
    } else {
      return [{...entry, meantime: null}]
    }
  }, []).reverse()

  if (entries.length > 0) {
    const theMostRecent = entries[0]
    const theMostRecentDate = new Date(theMostRecent.time * 1000)
    const hours = theMostRecentDate.getHours()
    const isLate = (hours >= 21 || hours < 3)
    const nextEntryInMinutes = isLate ? 210 : 150

    entries.unshift({
      id: 'future',
      time: Math.round(addMinutes(theMostRecentDate, nextEntryInMinutes) / 1000),
      extra_food: 0,
      meantime: null,
      isSuggested: true
    })
  }

  const groupedEntries = entries && entries.reduce((acc, entry) => {
    const day = startOfDay(new Date(entry.time * 1000)).getTime()
    acc[day] = acc[day] || []
    acc[day].push(entry)
    return acc
  }, {})

  const onAddEntry = () => createEntry({ variables: { time: Math.round(Date.now() / 1000), spaceId}})

  return (
    <>
      { (error || creationError) && <ShowError message={error || creationError} /> }

      <AppBar className={classes.appBar}>
        <Toolbar disableGutters={true} className={classes.toolbar}>
          <Typography variant="h5" className={classes.title}>
            Food time
          </Typography>
          <Avatar alt="Profile picture" src={profile.imageUrl} className={classes.avatar} />
        </Toolbar>
      </AppBar>

      <Toolbar className={classes.toolbar}/>

      <Container className={classes.listWrapper} maxWidth="sm">
        <Fab variant='extended' color='primary' aria-label="delete" className={classes.fab} onClick={onAddEntry} disabled={creationLoading}>
          <AddIcon className={classes.extendedIcon} />
          New feeding
        </Fab>

        { !loading && data && data.entries.length > 0 &&
          <TimeSinceLastFeeding lastFeedingTime={entries[1].time * 1000} nextFeedingTime={entries[0].time * 1000}/>
        }

        {!loading && !error &&
        <Paper>
          { !loading && data && data.entries.length > 0 &&
            <GrouppedList groupedEntries={groupedEntries}/>
          }

          { !loading && data && data.entries.length === 0 &&
          <List>
            <ListItem>
              <ListItemText primary='Click the button to start measuring intervals' />
            </ListItem>
          </List>
          }

        </Paper>
        }
        { loading && <CircularProgress /> }
      </Container>
    </>
  )
}

export default EntryList;
