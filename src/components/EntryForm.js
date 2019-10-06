import React, { useState, useCallback } from 'react'
import subMinutes from 'date-fns/subMinutes'
import addMinutes from 'date-fns/addMinutes'
import subHours from 'date-fns/subHours'
import addHours from 'date-fns/addHours'
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays'

import { Redirect } from 'react-router-dom'

import {
  Button,
  Container,
  Paper,
  Typography,
  Grid,
  Slider
} from '@material-ui/core'

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import { useMutation, useApolloClient } from '@apollo/react-hooks'
import ArrowUp from '@material-ui/icons/KeyboardArrowUp'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { debounce } from '../utils'

import { SpacePage } from '../routing'

import {
  GET_ENTRIES,
  UPDATE_ENTRY,
  REMOVE_ENTRY
} from '../queries'
import {formatDay, getHours, getMinutes} from '../time';
import FeedingSourceSelector from './FeedingSourceSelector';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 5),
    },
    dateTime: {
      display: 'flex',
      flexDirection: 'column',
    },
    date: {
      marginLeft: 20
    },
    arrow: {
      color: '#808edc',
      minWidth: 'initial'
    },
    dateTimeBar: {
      display: 'flex',
      flexDirection: 'row',
      padding: 10
    }
  }),
)

const updateGetEntriesCache = (store, spaceId, fn) => {
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
      entries: fn(listData.entries)

    }
  })
}

function EntryForm({match, data}) {
  const { id } = match.params

  const spaceId = data.entry.spaceId

  const [removeEntry, {data: mutationData}] = useMutation(REMOVE_ENTRY, {
    variables: {id},
    update: (store, { data: {removeEntry} }) => {
      updateGetEntriesCache(store, spaceId, (entries) => {
        return entries.filter(entry => {
          return entry.id !== removeEntry.removedId
        })
      })
    },
  })

  const [date, setDate] = useState(new Date(data.entry.time * 1000))
  const [extraFood, setExtraFood] = useState(data.entry.extra_food)
  const [isBottleOnly, setIsBottleOnly] = useState(data.entry.type === 'bottle')
  const [breastFeedingSource, setBreastFeedingSource] = useState(data.entry.source)
  const [vitamin, setVitamin] = useState(data.entry.vitamin)
  const [feedingDuration, setFeedingDuration] = useState(data.entry.feeding_duration)

  const client = useApolloClient()

  const updateEntry = useCallback(debounce(variables => {
    return client.mutate({
      mutation: UPDATE_ENTRY,
      variables: {
        id,
        ...variables
      },
      update: (store) => {
        updateGetEntriesCache(store, spaceId, (entries) => {
          return entries.sort((e1, e2) => e2.time - e1.time)
        })
      }
    })
  }), [client, id])

  const updateDate = (date) => {
    setDate(date)
    updateEntry({
      time: Math.round(date.getTime() / 1000)
    })
  }

  const getFeedingType = (extraFoodInput, isBottleOnlyInput) => {
    if (extraFoodInput === 0) {
      return 'breast'
    }

    return isBottleOnlyInput
      ? 'bottle'
      : 'mixed'
  }

  const updateExtraFood = (value) => {
    setExtraFood(value)
    setIsBottleOnly(true)

    updateEntry({
      extra_food: value,
      type: getFeedingType(value, true)
    })
  }

  const updateFeedingType = event => {
    const { checked } = event.target
    setIsBottleOnly(checked)

    const entryType = getFeedingType(extraFood, checked)

    updateEntry({
      type: entryType
    })
  }

  const updateVitamin = (event, newVitamin) => {
    setVitamin(newVitamin === "1")

    updateEntry({
      vitamin: newVitamin === "1"
    })
  }

  const breastFeedingSourceChanged = (source) => {
    setBreastFeedingSource(source)
  }

  const classes = useStyles()

  if (mutationData) {
    return <Redirect to={SpacePage.path({id: spaceId})}/>
  }

  const updateFeedingDuration = (value) => {
    setFeedingDuration(value)

    updateEntry({
      feeding_duration: value
    })
  }

  const feedingSourceComponent = !isBottleOnly
    ? <Grid item xs={12} md={12}>
      <Paper className={classes.root}>
        <FeedingSourceSelector
          id={id}
          breastFeedingSource={breastFeedingSource}
          onChange={breastFeedingSourceChanged}
        />
      </Paper>
    </Grid>
    : null

  const feedingDurationComponent = !isBottleOnly
    ? <Grid item xs={12} md={12}>
      <Paper className={classes.root}>
        <Typography paragraph>
          Feeding duration - {feedingDuration}min
        </Typography>
        <Slider
          defaultValue={feedingDuration}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={0}
          max={30}
          onChange={(e, value) => updateFeedingDuration(value)}
        />
      </Paper>
    </Grid>
    : null

  return (
     <header>
       <div className={["App-header", classes.dateTimeBar].join(' ')}>
         <div className={classes.dateTime}>
           <Button className={classes.arrow} onClick={() => updateDate(addHours(date, 1))}>
             <ArrowUp/>
           </Button>
           <Typography variant='h5'>
             <span>{getHours(date)}</span>
           </Typography>
           <Button className={classes.arrow}  onClick={() => updateDate(subHours(date, 1))}>
             <ArrowDown/>
           </Button>
         </div>
          :
         <div className={classes.dateTime}>
           <Button className={classes.arrow} onClick={() => updateDate(addMinutes(date, 5))}>
             <ArrowUp/>
           </Button>
           <Typography variant='h5'>
             <span>{getMinutes(date)}</span>
           </Typography>
           <Button className={classes.arrow} onClick={() => updateDate(subMinutes(date, 5))}>
             <ArrowDown/>
           </Button>
         </div>
         <div className={[classes.dateTime, classes.date].join(' ')}>
           <Button className={classes.arrow} onClick={() => updateDate(addDays(date, 1))}>
             <ArrowUp/>
           </Button>
           <Typography variant='h6'>
             <span>{formatDay(date)}</span>
           </Typography>
           <Button className={classes.arrow} onClick={() => updateDate(subDays(date, 1))}>
             <ArrowDown/>
           </Button>
         </div>
        </div>

       <Container maxWidth="sm">

          <Grid container spacing={2} direction='row' justify='center'>
            <Grid item xs={12} md={12}>
              <Paper className={classes.root}>
                <Typography paragraph>
                  Extra food - {extraFood}ml
                </Typography>

                <Slider
                  defaultValue={extraFood}
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isBottleOnly}
                      onChange={updateFeedingType}
                      color="primary"
                    />
                  }
                  label="Bottle only"
                />
              </Paper>
            </Grid>

            {feedingSourceComponent}

            {feedingDurationComponent}

            <Grid item xs={12} md={12}>
              <Paper className={classes.root}>
                <Typography paragraph>
                  Got vitamin?
                </Typography>

                <ToggleButtonGroup value={vitamin ? "1" : "0"} exclusive onChange={updateVitamin}>
                  <ToggleButton value="1">Yes</ToggleButton>
                  <ToggleButton value="0">No</ToggleButton>
                </ToggleButtonGroup>
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
       </Container>
      </header>
  )
}

export default EntryForm
