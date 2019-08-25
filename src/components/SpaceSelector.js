import React from 'react'

import {
  CircularProgress,
  Container,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import Layout from './Layout'

import { GET_SPACES } from '../queries'
import { useQuery } from 'react-apollo-hooks'

function SpaceSelector({history}) {
  const { loading, data, error } = useQuery(GET_SPACES)

  const onClick = (id) => {
    history.push(`/space/${id}`)
  }

  return (<Layout>
    <Container maxWidth="sm">
      { loading && <CircularProgress/>}
      { !loading &&
        <Paper>
          <List>
            { data.spaces.map(space => (
              <ListItem key={space.id} onClick={() => onClick(space.id)}>
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
