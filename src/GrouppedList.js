import React, { useState } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import { ListItemIcon } from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'

import format from 'date-fns/format'
import {Link} from 'react-router-dom'
import { formatElapsedTime, formatTime } from './time'
import { makeStyles } from '@material-ui/core/styles'
import { CSSTransitionGroup } from 'react-transition-group'
import { useInterval } from './useInterval'

const A_DAY = 24 * 60 * 60 * 1000

const useStyles = makeStyles(theme => ({
  item: {
    opacity: 0.3
  }
}))

const SuggestedListItem = ({time, key}) => {
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1)
  }, 15 * 1000)

  const now = Date.now()
  const classes = useStyles()
  const date = new Date(time * 1000)

  return <ListItem key={key} className={classes.item}>
    <ListItemText primary={`Next at ${formatTime(date)}`} secondary={date > now && formatElapsedTime(date, now)} />
  </ListItem>
}

const GrouppedList = ({groupedEntries}) => {
  const now = Date.now()

  return (
    <List>
      {
        Object.entries(groupedEntries).map(([timestamp, group]) => (
          <CSSTransitionGroup
            key={timestamp}
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <ListSubheader>
              {format(parseInt(timestamp, 10), 'd MMM, yyyy')}
            </ListSubheader>

            {group.map(({time, id, meantime, isSuggested}, position) => (
                isSuggested
                  ? <SuggestedListItem key={id} time={time} />
                  : <ListItem key={id}>
                    <ListItemIcon>
                      #{group.length - position}
                    </ListItemIcon>
                    <ListItemText primary={formatTime(time * 1000)} secondary={meantime} />
                    {
                      (now - time * 1000 < A_DAY) &&
                      <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='Comments' component={Link} to={`/edit/${id}`}>
                          <Edit/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    }
                  </ListItem>
              )
            )}
          </CSSTransitionGroup>
        ))
      }
    </List>
  )
}

export default GrouppedList
