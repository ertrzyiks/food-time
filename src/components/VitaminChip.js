import React from 'react'
import format from 'date-fns/format'
import {UPDATE_ENTRY} from '../queries'
import {useMutation} from 'react-apollo-hooks'
import Chip from '@material-ui/core/Chip'
import DoneIcon from '@material-ui/icons/Done'
import RefreshIcon from '@material-ui/icons/Refresh'
import CloseIcon from '@material-ui/icons/Close'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import { makeStyles } from '@material-ui/core/styles'
import { green, red, blue } from "@material-ui/core/colors/index";

const useStyles = makeStyles({
  green_chip: {
    backgroundColor: green[100]
  },
  red_chip: {
    backgroundColor: red[100]
  },
  blue_chip: {
    backgroundColor: blue[100]
  }
})

const VitaminChip = ({group}) => {
  const classes = useStyles()

  const realEntries = group.filter(({isSuggested}) => !isSuggested)
  const vitaminEntries = realEntries.filter(({vitamin}) => vitamin)
  const vitaminTime = vitaminEntries.length > 0 ? vitaminEntries[0].time * 1000 : null
  const firstRealEntry = realEntries[0]

  const [updateEntry, {loading, error}] = useMutation(UPDATE_ENTRY)

  const updateVitamin = (entry) => {
    updateEntry({
      variables: {
        id: entry.id,
        vitamin: true
      }
    })
  }

  if (loading) {
    return <Chip
      size='small'
      label='Vit D3'
      icon={<RefreshIcon/>}
      className={classes.blue_chip}
    />
  }

  return <Chip
    size='small'
    label={`Vit D3 ${vitaminTime ? '(' + format(vitaminTime, 'HH:mm') + ')' : ''}`}
    icon={vitaminTime ? <DoneIcon /> : <CloseIcon/>}
    deleteIcon={<CheckBoxOutlineBlankIcon />}
    onDelete={!vitaminTime && firstRealEntry ? () => updateVitamin(firstRealEntry) : null}
    className={vitaminTime ? classes.green_chip : classes.red_chip}
  />
}

export default VitaminChip
