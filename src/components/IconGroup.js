import React from 'react'
import { ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BottleFeedingIcon from '@material-ui/icons/Opacity'
import BreastFeedingIcon from '@material-ui/icons/ChildCare'

const useIconStyles = makeStyles({
  icon_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 12,
    marginRight: 5,
    textAlign: 'center'
  },
  bottle_icon: {
    color: '#24a0ff'
  },
  icon_container: {
    display: 'flex'
  },
  small_icon: {
    fontSize: '1rem'
  }
})

const IconGroup = ({ type, extra_food, feeding_duration }) => {
  const classes = useIconStyles()

  const feedingDurationText = feeding_duration
    ? <span>{feeding_duration}'</span>
    : null

  let icons;
  switch (type) {
    case 'breast':
      icons = (
        <>
          <BreastFeedingIcon/>
          {feedingDurationText}
        </>
      )
      break;
    case 'bottle':
      icons = (
        <>
          <BottleFeedingIcon className={classes.bottle_icon}/> {extra_food}ml
        </>
      )
      break;
    case 'mixed':
      icons = (
        <>
          <div className={classes.icon_container}>
            <BreastFeedingIcon className={classes.small_icon}/>
            <BottleFeedingIcon className={[classes.bottle_icon, classes.small_icon].join(' ')}/>
          </div>
          <span>{extra_food}ml</span>
          {feedingDurationText}
        </>
      )
      break;
  }

  return (
    <ListItemIcon>
      <div className={classes.icon_wrapper}>
        {icons}
      </div>
    </ListItemIcon>
  )
}

export default IconGroup
