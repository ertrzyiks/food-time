import React, { useState } from 'react'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import {
  CircularProgress,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core'

import Chart from './Chart'
import { GET_DAY_STATS, GET_WEEK_STATS } from '../queries'
import {makeStyles} from '@material-ui/core/styles/index';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'

const useStyles = makeStyles(theme => ({
  primaryChartLine: {
    stroke: '#3f51b5',
    fill: '#7986cb'
  },
  secondaryChartLine: {
    stroke: '#e91e63',
    fill: '#f06292'
  },
  menu: {
    textAlign: 'right',
    margin: '20px 10px'
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-20px',
    marginTop: '-20px'
  }
}))

const Stats = ({spaceId}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [chartTimePeriod, setChartTimePeriod] = useState(null);

  const classes = useStyles()

  const getIntChartTimePeriod = (stringTimePeriod) => {
    switch (stringTimePeriod) {
      case 'week':
        return 7
      case 'month':
        return 30
      case 'quarter':
        return 90
      default:
        return 30
    }
  }

  const {loading, data: statsData, error} = useQuery(GET_DAY_STATS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      spaceId,
      daysAgo: getIntChartTimePeriod(chartTimePeriod)
    }
  })

  const [loadWeekStats, {loading: weekStatsLoading, data: weekStatsData, error: weekStatsError}] = useLazyQuery(GET_WEEK_STATS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      spaceId,
      daysAgo: getIntChartTimePeriod(chartTimePeriod)
    }
  })

  if (statsData && !weekStatsLoading && !weekStatsData) {
    loadWeekStats()
  }

  if (!statsData) {
    return <div><CircularProgress/></div>
  }

  const extraFoodData = {
    labels: statsData.stats.extra_food_per_day.map(({date}) => date),
    series: [
      {
        data: statsData.stats.extra_food_per_day.map(({extra_food}) => extra_food),
        className: classes.primaryChartLine
      }
    ]
  }

  const feedingCountData = {
    labels: statsData.stats.feeding_count_per_day.map(({date}) => date),
    series: [
      {
        data: statsData.stats.feeding_count_per_day.map(({feeding_count}) => feeding_count),
        className: classes.primaryChartLine
      }
    ]
  }

  const getRoundedHoursFromMinutes = (mins) => (Math.round(mins/60 * 10) / 10).toFixed(2)

  const nightBreaksData = weekStatsData ? {
    labels: weekStatsData.stats.night_breaks.map(({date}) => date),
    series: [
      {
        data: weekStatsData.stats.night_breaks.map(({firstBreakDurationInMins}) => getRoundedHoursFromMinutes(firstBreakDurationInMins)),
        className: classes.primaryChartLine
      },
      {
        data: weekStatsData.stats.night_breaks.map(({secondBreakDurationInMins}) => getRoundedHoursFromMinutes(secondBreakDurationInMins)),
        className: classes.secondaryChartLine
      },
    ]
  } : null

  const avgDayBreakData = weekStatsData ? {
    labels: weekStatsData.stats.average_day_break.map(({date}) => date),
    series: [
      {
        data: weekStatsData.stats.average_day_break.map(({average_duration_mins}) => getRoundedHoursFromMinutes(average_duration_mins)),
        className: classes.primaryChartLine
      }
    ]
  } : null

  const showNthLabel = (n) => (value, index) => {
    if (index % n === 0) {
      return value.split('/').slice(0, 2).join('/')
    }
    return ''
  }

  const getOptions = (yUnit) =>  ({
    showArea: true,
    showPoint: false,
    low: 0,
    axisY: {
      labelInterpolationFnc:((value) => `${value}${yUnit}`),
      onlyInteger: true
    },
    axisX: {
      labelInterpolationFnc: showNthLabel(7)
    },
  })

  const responsiveOptions = [
    ['screen and (min-width: 640px)', {
      showPoint: true,

      axisX: {
        labelInterpolationFnc: showNthLabel(3)
      }
    }]
  ]

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };

  const handleClose = (e) => {
    if (e) {
      setChartTimePeriod(e);
    }

    setAnchorEl(null);
  };

  return (
    <div>
      <div className={classes.menu}>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Select dates
          <ArrowDown/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose.bind(this, 'week')}>Last week</MenuItem>
          <MenuItem onClick={handleClose.bind(this, 'month')}>Last month</MenuItem>
          <MenuItem onClick={handleClose.bind(this, 'quarter')}>Last quarter</MenuItem>
        </Menu>
      </div>
    <div style={{height: 30}}>
      { loading && <CircularProgress size={20}/> }
    </div>
    <Chart
      type='line'
      data={extraFoodData}
      title='Extra food'
      options={getOptions('ml')}
      responsiveOptions={responsiveOptions}/>
    <Chart
      type='line'
      data={feedingCountData}
      title='Feeding count'
      options={getOptions('')}
      responsiveOptions={responsiveOptions}/>

     <div style={{position: 'relative'}}>
      { !nightBreaksData && <CircularProgress className={classes.loader}/> }
      <Chart
        type='line'
        data={nightBreaksData}
        title='Night break duration'
        options={getOptions('h')}
        responsiveOptions={responsiveOptions}/>
     </div>

      <div style={{position: 'relative'}}>
        { !avgDayBreakData && <CircularProgress className={classes.loader}/> }
        <Chart
          type='line'
          data={avgDayBreakData}
          title='Average day break'
          options={getOptions('h')}
          responsiveOptions={responsiveOptions}/>
      </div>
    </div>
  )}

export default Stats
