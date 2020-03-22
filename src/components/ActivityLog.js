import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import AddIcon from '@material-ui/icons/Add'

import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Fab,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import ShowError from './ShowError'
import ActivityLogList from './ActivityLogList'

import {CREATE_ACTIVITY_LOG_ENTRY, GET_ACTIVITY_LOG} from '../queries'
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
  },
  form: {
    padding: '1em'
  }
}))

function ActivityLog({match}) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null)
  };

  const spaceId = match.params.id

  const { loading, data, error, refetch } = useQuery(GET_ACTIVITY_LOG, {variables: {spaceId}})
  const [createEntry, {loading: creationLoading, error: creationError}] = useMutation(CREATE_ACTIVITY_LOG_ENTRY, {
    refetchQueries: ['getActivityLog']
  })

  const hasData = !loading && !error

  const onChange = React.useCallback(() => {
    if (document.hidden === false) {
      refetch()
    }
  }, [refetch])

  useEventListener('visibilitychange', onChange, document)

  const entries = hasData && data.activity_log.slice()

  const onAdd = (message) => () => {
    handleClose()
    return createEntry({ variables: { time: Math.round(Date.now() / 1000), spaceId, message}})
  }

  return (
    <>
      { (error) && <ShowError message={error} /> }

      <Container className={classes.listWrapper} maxWidth="sm">
        <Fab variant='extended' color='primary' aria-label="delete" className={classes.fab} onClick={handleClick} disabled={creationLoading}>
          <AddIcon />
          New entry
        </Fab>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={onAdd('Bobodent')}>Bobodent</MenuItem>
          <MenuItem onClick={onAdd('Ibufen')}>Ibufen</MenuItem>
          <MenuItem onClick={onAdd('Pedicetamol')}>Pedicetamol</MenuItem>
          <MenuItem onClick={onAdd('Espumisan')}>Espumisan</MenuItem>
        </Menu>

        {!loading && !error &&
        <Paper>
          { !loading && data && data.activity_log.length > 0 &&
            <ActivityLogList list={entries}/>
          }

          { !loading && data && data.activity_log.length === 0 &&
          <List>
            <ListItem>
              <ListItemText primary="Click the button 'New entry' to create log entry" />
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

export default ActivityLog;
