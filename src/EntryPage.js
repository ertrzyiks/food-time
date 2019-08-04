import React from 'react'
import gql from 'graphql-tag'

import { Container, Paper, CircularProgress, Typography, TextField } from '@material-ui/core'
import { TimePicker } from '@material-ui/pickers'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { formatTime } from './time'


const GET_ENTRY = gql`
  query getEntry($spaceId: String!, $id: String!) {
    entry(spaceId: $spaceId, id: $id) {
      id
      time
    }
  }
`


function EntryPage({spaceId, match}) {
  const { id } = match.params

  const { loading, data } = useQuery(GET_ENTRY, {variables: {spaceId, id}})

  return (
    <>
      <header className="App-header">
        { !loading &&
          <Typography>
            {formatTime(data.entry.time)}
          </Typography>
        }
      </header>

      <Container maxWidth="sm">
        {
          loading
            ? <CircularProgress/>
            : <Paper>
              <TimePicker value={new Date(data.entry.time * 1000)} />
            </Paper>
        }

      </Container>
    </>
  )
}

export default EntryPage
