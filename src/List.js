import React from 'react';
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'

import Button from '@material-ui/core/Button'

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { CircularProgress,  List, ListItem, ListItemText } from '@material-ui/core'

import './App.css'
import ShowError from './ShowError'
import GrouppedList from './GrouppedList'

import startOfDay from 'date-fns/startOfDay'
import addMinutes from 'date-fns/addMinutes'

import { formatElapsedTime } from './time'

import { GET_ENTIRES } from './queries'

const CREATE_ENTRY = gql`
  mutation CreateEntry($spaceId: String!, $time: Int!) {
    createEntry(spaceId: $spaceId, time: $time) {
      id
      time
      extra_food
    }
  }
`

function EntryList({spaceId}) {
  const { loading, data, error } = useQuery(GET_ENTIRES, {variables: {spaceId}})
  const hasData = !loading && !error

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
    const isLate = (hours > 21 || hours < 6)
    const nextEntryInMinutes = isLate ? 240 : 210

    entries.unshift({
      id: 'future',
      time: Math.round(addMinutes(theMostRecentDate, nextEntryInMinutes) / 1000),
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
      <header className="App-header">
        { (error || creationError) && <ShowError message={error || creationError} /> }

        <Button variant="contained" size='large' color="primary" onClick={onAddEntry} disabled={creationLoading}>
          Now
        </Button>
      </header>

      <Container maxWidth="sm">
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
