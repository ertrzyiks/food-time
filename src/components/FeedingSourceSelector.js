import React from 'react'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {Typography} from '@material-ui/core'

import {UPDATE_ENTRY} from '../queries'
import {useMutation} from 'react-apollo-hooks'

const FeedingSourceSelector = ({ id, breastFeedingSource, onChange }) => {
  const [updateEntry] = useMutation(UPDATE_ENTRY)

  const updateBreastFeedingSource = (event, source) => {
    updateEntry({
      variables: {
        id,
        source
      }
    })

    if (onChange) {
      onChange(source)
    }
  }

  return (
    <>
      <Typography paragraph>
        Breast feeding source
      </Typography>
      <ToggleButtonGroup value={breastFeedingSource} exclusive onChange={updateBreastFeedingSource}>
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
        <ToggleButton value="both">Both</ToggleButton>
        <ToggleButton value="none">None</ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default FeedingSourceSelector