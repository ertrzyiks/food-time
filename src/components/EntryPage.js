import React, { useState, useCallback } from 'react'
import subMinutes from 'date-fns/subMinutes'
import addMinutes from 'date-fns/addMinutes'
import subHours from 'date-fns/subHours'
import addHours from 'date-fns/addHours'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'

import { Redirect, Link as RouterLink } from 'react-router-dom'

import {
  Button,
  Container,
  Fab,
  Paper,
  CircularProgress,
  Typography,
  Grid,
  Slider,
  IconButton
} from '@material-ui/core'
import { useQuery, useMutation, useApolloClient } from 'react-apollo-hooks'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Layout from './Layout'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { formatTime, formatDay } from '../time'
import { debounce } from '../utils'

import { SpacePage } from '../routing'

import {
  GET_ENTRIES,
  GET_ENTRY,
  UPDATE_ENTRY_TIME,
  REMOVE_ENTRY
} from '../queries'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 5),
    },
  }),
)

function EntryPage({match}) {
  const { id } = match.params

  const { loading, data } = useQuery(GET_ENTRY, {variables: {id}})
  const spaceId = data && data.entry.spaceId

  const [removeEntry, {data: mutationData}] = useMutation(REMOVE_ENTRY, {
    variables: {id},
    update: (store, { data: {removeEntry} }) => {
      let listData = null

      try {
        listData = store.readQuery({query: GET_ENTRIES, variables: {spaceId}})
      } catch (e) {
        // Reading error, do nothing
      }

      if (!listData) {
        return
      }

      store.writeQuery({
        query: GET_ENTRIES, variables: {spaceId}, data: {
          entries: listData.entries.filter(entry => {
            return entry.id !== removeEntry.removedId
          })
        }
      })
    },
  })

  const [date, setDate] = useState(null)
  const [extraFood, setExtraFood] = useState(null)

  const client = useApolloClient()

  const updateEntry = useCallback(debounce(variables => {
    return client.mutate({
      mutation: UPDATE_ENTRY_TIME,
      variables: {
        id,
        ...variables
      }
    })
  }), [client, id])

  if (date === null && !loading) {
    setDate(new Date(data.entry.time * 1000))
  }

  if (extraFood === null && !loading) {
    setExtraFood(data.entry.extra_food)
  }

  const updateDate = (date) => {
    setDate(date)
    updateEntry({
      time: Math.round(date.getTime() / 1000)
    })
  }

  const updateExtraFood = (value) => {
    setExtraFood(value)
    updateEntry({
      extra_food: value
    })
  }

  const classes = useStyles()

  if (mutationData) {
    return <Redirect to={SpacePage.path({id: spaceId})}/>
  }

  const backButton = (
    <IconButton
    edge='start'
    color='inherit'
    component={props => <RouterLink {...props} to={SpacePage.path({id: spaceId})}/>}>
      <ArrowBackIcon/>
    </IconButton>
  )

  return (
    <Layout toolbarIcon={backButton}>
      <header className="App-header">
        { !loading &&
          <Typography variant='h5'>
            {formatTime(date)} {formatDay(date)}
          </Typography>
        }
      </header>

      <Container maxWidth="sm">
        {
          loading
            ? <CircularProgress/>
            : <Grid container spacing={2} direction='row' justify='center'>
              <Grid item xs={12} md={4}>
                <Paper className={classes.root}>
                  <Typography paragraph>
                    Day
                  </Typography>

                  <Fab color="primary" aria-label="Add" size='small' onClick={() => updateDate(addDays(date, 1))}>
                    <AddIcon />
                  </Fab>
                  <Fab color="primary" aria-label="Remove" size='small' onClick={() => updateDate(subDays(date, 1))}>
                    <RemoveIcon />
                  </Fab>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper className={classes.root}>
                  <Typography paragraph>
                    Hours
                  </Typography>

                  <Fab color="primary" aria-label="Add" size='small' onClick={() => updateDate(addHours(date, 1))}>
                    <AddIcon />
                  </Fab>

                  <Fab color="primary" aria-label="Remove" size='small' onClick={() => updateDate(subHours(date, 1))}>
                    <RemoveIcon />
                  </Fab>
                </Paper>
              </Grid>

              <Grid item xs={12} md={4}>
                <Paper className={classes.root}>
                  <Typography paragraph>
                    Minutes
                  </Typography>

                  <Fab color="primary" aria-label="Add" size='small' onClick={() => updateDate(addMinutes(date, 5))}>
                    <AddIcon />
                  </Fab>

                  <Fab color="primary" aria-label="Remove" size='small' onClick={() => updateDate(subMinutes(date, 5))}>
                    <RemoveIcon />
                  </Fab>
                </Paper>
              </Grid>

              <Grid item xs={12} md={12}>
                <Paper className={classes.root}>
                  <Typography paragraph>
                    Extra food - {extraFood}ml
                  </Typography>

                  <Slider
                    defaultValue={extraFood}
                    aria-labelledby='discrete-slider'
                    valueLabelDisplay='off'
                    step={5}
                    min={0}
                    max={150}
                    onChange={(e, value) => updateExtraFood(value)}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={12}>
                <Paper className={classes.root}>
                  <Typography paragraph>
                    Danger zone
                  </Typography>

                  <Button variant="contained" color='secondary' onClick={removeEntry}>Delete</Button>
                </Paper>
              </Grid>
            </Grid>
        }

      </Container>
    </Layout>
  )
}

export default EntryPage
