import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'

import Chart from './Chart'
import { GET_STATS } from '../queries'
import {makeStyles} from '@material-ui/core/styles/index';
import { formatTime } from '../time';

const useStyles = makeStyles(theme => ({
  primaryChartLine: {
    stroke: '#3f51b5',
    fill: '#7986cb'
  },
  secondaryChartLine: {
    stroke: '#e91e63',
    fill: '#f06292'
  }
}))

const Stats = ({spaceId}) => {
  const classes = useStyles()

  const {loading, data: statsData, error} = useQuery(GET_STATS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      spaceId
    }
  })

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

  const nightBreaksData = {
    labels: statsData.stats.night_breaks.map(({date}) => date),
    series: [
      {
        data: statsData.stats.night_breaks.map(({firstBreakDurationInMins}) => getRoundedHoursFromMinutes(firstBreakDurationInMins)),
        className: classes.primaryChartLine
      },
      {
        data: statsData.stats.night_breaks.map(({secondBreakDurationInMins}) => getRoundedHoursFromMinutes(secondBreakDurationInMins)),
        className: classes.secondaryChartLine
      },
    ]
  }

  const showNthLabel = (n) => (value, index) => {
    if (index % n == 0) {
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

  return <div>
    <div style={{height: 30}}>
      { loading && <CircularProgress size={20}/> }
    </div>
    <Chart
      data={extraFoodData}
      title='Extra food'
      options={getOptions('ml')}
      responsiveOptions={responsiveOptions}/>
    <Chart
      data={feedingCountData}
      title='Feeding count'
      options={getOptions('')}
      responsiveOptions={responsiveOptions}/>
    <Chart
      data={nightBreaksData}
      title='Night break duration'
      options={getOptions('h')}
      responsiveOptions={responsiveOptions}/>
  </div>
}

export default Stats