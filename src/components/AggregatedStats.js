import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'

import Chart from './Chart'
import { GET_AGGREGATED_STATS } from '../queries'
import {makeStyles} from '@material-ui/core/styles/index';

const useStyles = makeStyles(theme => ({
  primaryChartLine: {
    stroke: '#ff5722',
    fill: '#ff8a65'
  },
  secondaryChartLine: {
    stroke: '#ffeb3b',
    fill: '#fff176'
  }
}))

const AggregatedStats = ({spaceId}) => {
  const classes = useStyles()

  const {loading, data: statsData, error} = useQuery(GET_AGGREGATED_STATS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      spaceId
    }
  })

  if (!statsData) {
    return <div><CircularProgress/></div>
  }

  const extraFoodData = {
    labels: statsData.aggregated_stats.extra_food_per_week.map(({week_start_date}) => week_start_date),
    series: [
      {
        data: statsData.aggregated_stats.extra_food_per_week.map(({extra_food}) => extra_food),
        className: classes.primaryChartLine
      }
    ]
  }

  const feedingCountData = {
    labels: statsData.aggregated_stats.feeding_count_per_week.map(({week_start_date}) => week_start_date),
    series: [
      {
        data: statsData.aggregated_stats.feeding_count_per_week.map(({feeding_count}) => feeding_count),
        className: classes.primaryChartLine
      }
    ]
  }

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
      labelInterpolationFnc: showNthLabel(2)
    },
  })

  const responsiveOptions = [
    ['screen and (min-width: 640px)', {
      showPoint: true,

      axisX: {
        labelInterpolationFnc: showNthLabel(1)
      }
    }]
  ]

  return <div>
    <div style={{height: 30}}>
      { loading && <CircularProgress size={20}/> }
    </div>
    <Chart
      type='bar'
      data={extraFoodData}
      title='Extra food per week'
      options={getOptions('ml')}
      responsiveOptions={responsiveOptions}/>
    <Chart
      type='bar'
      data={feedingCountData}
      title='Feeding count per week'
      options={getOptions('')}
      responsiveOptions={responsiveOptions}/>
  </div>
}

export default AggregatedStats
