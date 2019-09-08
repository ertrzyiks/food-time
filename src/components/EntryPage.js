import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import {
  Container,
  CircularProgress,
  IconButton
} from '@material-ui/core'


import { useQuery } from 'react-apollo-hooks'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Layout from './Layout'
import EntryForm from './EntryForm'

import { SpacePage } from '../routing'

import {
  GET_ENTRY
} from '../queries'


function EntryPage({match}) {
  const { id } = match.params

  const { loading, data } = useQuery(GET_ENTRY, {variables: {id}})
  const spaceId = data && data.entry.spaceId

  const backButton = spaceId && (
    <IconButton
    edge='start'
    color='inherit'
    component={React.forwardRef((props, ref) => <RouterLink {...props} ref={ref} to={SpacePage.path({id: spaceId})}/>)}>
      <ArrowBackIcon/>
    </IconButton>
  )

  return (
    <Layout toolbarIcon={backButton}>
      {
        loading ? <>
          <header className="App-header" />
          <Container maxWidth="sm">
            <CircularProgress/>
          </Container>
        </>
        : <EntryForm data={data} match={match} />
      }
    </Layout>
  )
}

export default EntryPage
