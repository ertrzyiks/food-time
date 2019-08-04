import React from 'react'
import gql from 'graphql-tag'

import { Container, Paper, CircularProgress } from '@material-ui/core'
import { useQuery, useMutation } from 'react-apollo-hooks'

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

  const res = useQuery(GET_ENTRY, {variables: {spaceId, id}})

  console.log(res)
  return (
    <>
      <header className="App-header">

      </header>

      <Container maxWidth="sm">
        {
          res.loading
            ? <CircularProgress/>
            : <Paper>
              Siema
            </Paper>
        }

      </Container>
    </>
  )
}

export default EntryPage
