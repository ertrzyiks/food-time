import React, { useState, useCallback } from 'react'
import gql from 'graphql-tag'
import subMinutes from 'date-fns/subMinutes'
import addMinutes from 'date-fns/addMinutes'
import subHours from 'date-fns/subHours'
import addHours from 'date-fns/addHours'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'

import { Container, Fab, Paper, CircularProgress, Typography, Grid, Slider } from '@material-ui/core'
import { useQuery, useApolloClient } from 'react-apollo-hooks'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { formatTime, formatDay } from './time'
import { debounce } from './utils'


const GET_ENTRY = gql`
  query getEntry($spaceId: String!, $id: String!) {
    entry(spaceId: $spaceId, id: $id) {
      id
      time
    }
  }
`

const UPDATE_ENTRY_TIME = gql`
  mutation UpdateEntry($spaceId: String!, $id: String!, $time: Int!) {
    updateEntry(spaceId: $spaceId, id: $id, time: $time) {
      id
      time
    }
  }
`

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 5),
    },
  }),
)

function EntryPage({spaceId, match}) {
  const { id } = match.params

  const { loading, data } = useQuery(GET_ENTRY, {variables: {spaceId, id}})

  const [date, setDate] = useState(null)

  const client = useApolloClient()

  const updateEntry = useCallback(debounce(variables => {
    return client.mutate({
      mutation: UPDATE_ENTRY_TIME,
      variables: {
        spaceId,
        id,
        ...variables
      }
    })
  }), [spaceId, id])

  if (date === null && !loading) {
    setDate(new Date(data.entry.time * 1000))
  }

  const updateDate = (date) => {
    setDate(date)
    updateEntry({
      time: Math.round(date.getTime() / 1000)
    })
  }

  const classes = useStyles()

  return (
    <>
      <header className="App-header">
        { !loading &&
          <Typography>
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
                    Extra food
                  </Typography>

                  <Slider
                    defaultValue={30}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    min={10}
                    max={110}
                  />
                </Paper>
              </Grid>
            </Grid>
        }

      </Container>
    </>
  )
}

export default EntryPage
