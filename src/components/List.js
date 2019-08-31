import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'

import AddIcon from '@material-ui/icons/Add'

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Fab
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import ShowError from './ShowError'
import GrouppedList from './GrouppedList'
import TimeSinceLastFeeding from './TimeSinceLastFeeding'
import Layout from './Layout'

import startOfDay from 'date-fns/startOfDay'
import addMinutes from 'date-fns/addMinutes'

import { formatElapsedTime } from '../time'

import { GET_ENTRIES, CREATE_ENTRY } from '../queries'
import useEventListener from '../useEventListener'

const useStyles = makeStyles(theme => ({
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


function EntryList({match}) {
  const classes = useStyles();

  const spaceId = match.params.id

  const { loading, data, error, refetch } = useQuery(GET_ENTRIES, {variables: {spaceId}})
  const hasData = !loading && !error

  const onChange = React.useCallback(() => {
    console.log(document.hidden)
    if (document.hidden === false) {
      refetch()
    }
  }, [refetch])

  useEventListener('visibilitychange', onChange, document)

  const [createEntry, {loading: creationLoading, error: creationError}] = useMutation(CREATE_ENTRY, {
    refetchQueries: ['getEntries']
  })

  const entries = hasData && data.entries.slice().reverse().reduce((acc, entry) => {
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
    <Layout>
      { (error || creationError) && <ShowError message={error || creationError} /> }

      <Container className={classes.listWrapper} maxWidth="sm">
        <Fab variant='extended' color='primary' aria-label="delete" className={classes.fab} onClick={onAddEntry} disabled={creationLoading}>
          <AddIcon />
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
    </Layout>
  )
}

export default EntryList;
