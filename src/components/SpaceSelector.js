import React from 'react'

import {
  CircularProgress,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import { Link as RouterLink } from 'react-router-dom'
import Layout from './Layout'
import { SpacePage } from '../routing'

import { GET_SPACES } from '../queries'
import { useQuery } from 'react-apollo-hooks'

function SpaceSelector() {
  const { loading, data, error } = useQuery(GET_SPACES)

  return (<Layout>
    <Container maxWidth="sm">
      { loading && <CircularProgress/>}
      { !loading &&
        <Paper>
          <List disablePadding={true}>
            { data.spaces.map(space => (
              <ListItem key={space.id} divider button component={RouterLink} to={SpacePage.path({id: space.id})}>
                <ListItemText>{space.display_name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
      }
    </Container>
  </Layout>)
}

export default SpaceSelector
