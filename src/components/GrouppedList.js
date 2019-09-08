import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import Chip from '@material-ui/core/Chip'
import { IconButton } from '@material-ui/core'
import Edit from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'
import {green, red} from '@material-ui/core/colors'

import format from 'date-fns/format'
import {Link} from 'react-router-dom'
import { formatTime } from '../time'
import { makeStyles } from '@material-ui/core/styles'
import { CSSTransitionGroup } from 'react-transition-group'
import SuggestedListItem from './SuggestedListItem'
import IconGroup from './IconGroup'

const A_DAY = 24 * 60 * 60 * 1000

const useStyles = makeStyles(theme => ({
  item: {
    opacity: 0.3
  },
  root: {
    backgroundColor: theme.palette.background.paper
  },
  subheader: {
    backgroundColor: '#f0f2fa',
    color: theme.palette.common.black,
    textAlign: 'left'
  },
  subheader_total: {
    float: 'right'
  },
  subheader_vitamin: {
    marginLeft: 35
  },
  narrow_column: {
    flex: 'initial',
    marginRight: 35
  },
  source_column: {
    color: '#644889',
  },
  vitamin_column: {
    color: '#b17714',
  },
  green_chip: {
    backgroundColor: green[100]
  },
  red_chip: {
    backgroundColor: red[100]
  }
}))

const breastFeedingSourceMap = {
  left: 'L',
  right: 'R',
  both: 'LR',
  none: ''
}

const GrouppedList = ({groupedEntries}) => {
  const now = Date.now()

  const getTotalEntries = (group) => {
    return group.filter(({isSuggested}) => !isSuggested).length
  }

  const classes = useStyles()

  return (
    <List disablePadding className={classes.root}>
      {
        Object.entries(groupedEntries).map(([timestamp, group]) => {
          const vitaminEntries = group.filter(({vitamin}) => vitamin)
          const vitaminTime = vitaminEntries.length > 0 ? vitaminEntries[0].time * 1000 : null

          return(
            <CSSTransitionGroup
              key={timestamp}
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
              <ListSubheader className={classes.subheader}>
                {format(parseInt(timestamp, 10), 'd MMM, yyyy')}
                <span className={classes.subheader_vitamin}>
                  <Chip
                    size='small'
                    label={`Vit D3 ${vitaminTime ? '(' + format(vitaminTime, 'HH:mm') + ')' : ''}`}
                    icon={vitaminTime ? <DoneIcon /> : <CloseIcon/>}
                    className={vitaminTime ? classes.green_chip : classes.red_chip}
                  />
                </span>

                <span className={classes.subheader_total}>(total {getTotalEntries(group)})</span>
              </ListSubheader>

              {group.map(({id, time, extra_food, type, vitamin, meantime, source, isSuggested}) => {
                  return isSuggested
                    ? <SuggestedListItem key={id} time={time} className={classes.item}/>
                    : <ListItem key={id}>
                      <IconGroup type={type} extra_food={extra_food}/>

                      <ListItemText secondary={meantime} className={classes.narrow_column}>
                        {formatTime(time * 1000)}
                      </ListItemText>
                      <ListItemText className={[classes.source_column, classes.narrow_column].join(' ')}>
                        {breastFeedingSourceMap[source]}
                      </ListItemText>
                      <ListItemText className={[classes.vitamin_column, classes.narrow_column].join(' ')}>
                        {vitamin ? 'Vit D3' : ''}
                      </ListItemText>
                      <ListItemSecondaryAction>
                        {
                          (now - time * 1000 < A_DAY) &&
                          <IconButton edge='end' aria-label='Comments' component={Link} to={`/edit/${id}`}>
                            <Edit/>
                          </IconButton>
                        }
                      </ListItemSecondaryAction>
                    </ListItem>
                }
              )}
            </CSSTransitionGroup>
          )})
      }
    </List>
  )
}

export default GrouppedList
