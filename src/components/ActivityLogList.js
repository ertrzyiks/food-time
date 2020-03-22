import React from 'react'
import List from "@material-ui/core/List";
import {CSSTransitionGroup} from "react-transition-group";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {formatTime, formatDay} from "../time";

const ActivityLogList = ({list}) => {
  return (
    <List disablePadding>
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
      {
        list.map(({ id, time, message }) => {
          return(
            <ListItem key={id}>
              <ListItemText primaryTypographyProps={{variant: 'body2'}} secondary={`${formatDay(time * 1000)} ${formatTime(time * 1000)}`}>
                {message}
              </ListItemText>
            </ListItem>
          )})
      }
      </CSSTransitionGroup>
    </List>
  )
}

export default ActivityLogList
