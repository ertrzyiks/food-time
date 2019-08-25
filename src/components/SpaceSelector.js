import React from 'react'

import {
  CircularProgress,
  Container,
  Paper,
  Fab,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import { CSSTransitionGroup } from 'react-transition-group'

import { Link as RouterLink } from 'react-router-dom'
import Layout from './Layout'
import { SpacePage } from '../routing'

import { GET_SPACES, CREATE_SPACE } from '../queries'
import { useQuery, useMutation } from 'react-apollo-hooks'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 2
  }
}))

function SpaceSelector() {
  const classes = useStyles()

  const { loading, data, error } = useQuery(GET_SPACES)

  const [createSpace, {loading: creationLoading, error: creationError}] = useMutation(CREATE_SPACE, {
    variables: {name: 'New space'},
    refetchQueries: ['getSpaces']
  })

  return (<Layout>
    <Container maxWidth="sm">
      <Fab variant='extended' color='primary' aria-label="New space" className={classes.fab} onClick={createSpace} disabled={creationLoading}>
        <AddIcon/>
        New space
      </Fab>

      { loading && <CircularProgress/>}
      { !loading &&
        <Paper>
          <List disablePadding={true}>
            <CSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              { data.spaces.map(space => (
                <ListItem key={space.id} divider button component={RouterLink} to={SpacePage.path({id: space.id})}>
                  <ListItemText>{space.display_name}</ListItemText>
                </ListItem>
              ))}
            </CSSTransitionGroup>
          </List>
        </Paper>
      }
    </Container>
  </Layout>)
}

export default SpaceSelector
