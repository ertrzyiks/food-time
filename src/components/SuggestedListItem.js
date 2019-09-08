import React, { useState } from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

import {formatElapsedTime, formatTime} from '../time'
import {useInterval} from '../useInterval'

const SuggestedListItem = ({time, key, className}) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1)
  }, 15 * 1000)

  const now = Date.now()
  const date = new Date(time * 1000)

  return <ListItem key={key} className={className}>
    <ListItemText primary={`Next at ${formatTime(date)}`} secondary={date > now && formatElapsedTime(date, now)} />
  </ListItem>
}

export default SuggestedListItem
