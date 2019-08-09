import React, { useState } from 'react';
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import Typography from '@material-ui/core/Typography'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/Edit'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import { CircularProgress } from '@material-ui/core'
import { CSSTransitionGroup } from 'react-transition-group'
import { useInterval } from './useInterval'
import './App.css'
import ShowError from './ShowError'

import startOfDay from 'date-fns/startOfDay'
import format from 'date-fns/format'

import { formatTime, formatElapsedTime } from './time'

import { GET_ENTIRES } from './queries'

function Counter({text, last}) {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 30 * 1000);

  if (!last) {
    return null
  }

  return <span>{text}: {formatElapsedTime(Date.now() - last.now)}</span>;
}

const CREATE_ENTRY = gql`
  mutation CreateEntry($spaceId: String!, $time: Int!) {
    createEntry(spaceId: $spaceId, time: $time) {
      id
      time
      extra_food
    }
  }
`

const A_DAY = 24 * 60 * 60 * 1000

const GrouppedList = ({groupedEntries}) => {
  const now = Date.now()

  return (
    <List>
      {
        Object.entries(groupedEntries).map(([timestamp, group]) => (
          <CSSTransitionGroup
            key={timestamp}
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <ListSubheader>
              {format(parseInt(timestamp, 10), 'd MMM, yyyy')}
            </ListSubheader>

            {group.map(({time, id, meantime}) =>
              <ListItem key={id}>
                <ListItemText primary={formatTime(time * 1000)} secondary={meantime} />
                {
                  (now - time * 1000 < A_DAY) &&
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Comments" component={Link} to={`/edit/${id}`}>
                      <Edit/>
                    </IconButton>
                  </ListItemSecondaryAction>
                }
              </ListItem>
            )}
          </CSSTransitionGroup>
        ))
      }
    </List>
  )
}

function EntryList({spaceId}) {
  const { loading, data, error } = useQuery(GET_ENTIRES, {variables: {spaceId}})
  const hasData = !loading && !error

  const [createEntry] = useMutation(CREATE_ENTRY, {
    refetchQueries: ['getEntries']
  })

  const entries = hasData && data.entries.slice().reverse().reduce((acc, entry) => {
    if (acc.length > 0) {
      const last = acc[acc.length - 1]

      return [...acc, {...entry, meantime: formatElapsedTime(new Date(entry.time * 1000), new Date(last.time * 1000))}]
    } else {
      return [{...entry, meantime: null}]
    }
  }, []).reverse()

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
        { error && <ShowError message={error.toString()} /> }

        { !loading &&
        <Typography variant="h5" component="p">
          <Counter text='Since last event' last={0}/>
        </Typography>
        }

        <Button variant="contained" size='large' color="primary" onClick={onAddEntry}>
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
