import React, { useState } from 'react';
import gql from 'graphql-tag'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { AnimateGroup } from 'react-animate-mount'
import { useInterval } from './useInterval'
import './App.css';

import { formatTime, formatElapsedTime } from './time'

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

const GET_ENTIRES = gql`
  query getEntries($spaceId: String!) {
    entries(spaceId: $spaceId) {
      id
      time
    }
  }
`

const CREATE_ENTRY = gql`
  mutation CreateEntry($spaceId: String!, $time: Int!) {
    createEntry(spaceId: $spaceId, time: $time) {
      id
    }
  }
`

function EntryList({spaceId}) {
  const { loading, data } = useQuery(GET_ENTIRES, {variables: {spaceId}})

  const [createEntry] = useMutation(CREATE_ENTRY, {
    variables: { time: Math.round(Date.now() / 1000), spaceId},
    refetchQueries: ['getEntries']
  })

  return (
    <>
      <header className="App-header">

        { !loading &&
        <Typography variant="h5" component="p">
          <Counter text='Since last event' last={0}/>
        </Typography>
        }

        <Button variant="contained" size='large' color="primary" onClick={() => createEntry()}>
          Now
        </Button>
      </header>

      <Container maxWidth="sm">
        <Paper>
          { !loading && data && data.entries.length > 0 &&
          <List>
            <AnimateGroup>
              {data.entries.map(({time, elapsedTime, id}) =>
                <ListItem key={id}>
                  <ListItemText primary={formatTime(time * 1000)} />

                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="Comments" component={Link} to={`/edit/${id}`}>
                      <Edit/>
                    </IconButton>

                    {elapsedTime && elapsedTime < 60 * 60 * 1000 &&
                    <IconButton edge="end" aria-label="Comments" onClick={() => {}}>
                      <Delete/>
                    </IconButton>
                    }
                  </ListItemSecondaryAction>
                </ListItem>
              )}
            </AnimateGroup>
          </List>
          }

          { !loading && data && data.entries.length === 0 &&
          <List>
            <ListItem>
              <ListItemText primary='Click the button to start measuring intervals' />
            </ListItem>
          </List>
          }
        </Paper>
      </Container>
    </>
  )
}

export default EntryList;
