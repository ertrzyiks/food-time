import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CircularProgress } from '@material-ui/core'

import Chart from './Chart'
import { GET_STATS } from '../queries'

const Stats = ({spaceId}) => {
  const {loading, data: statsData} = useQuery(GET_STATS, {
    fetchPolicy: 'cache-and-network',
    variables: {
      spaceId
    }
  })

  if (!statsData) {
    return <div><CircularProgress/></div>
  }

  const data = {
    labels: statsData.stats.extra_food_per_day.map(({date}) => date),
    series: [
      {
        data: statsData.stats.extra_food_per_day.map(({extra_food}) => extra_food)
      }
    ]
  }

  const showNthLabel = (n) => (value, index) => {
    if (index % n == 0) {
      return value.split('/').slice(0, 2).join('/')
    }
    return ''
  }

  const options = {
    showArea: true,
    showPoint: false,
    low: 0,
    axisY: {
      labelInterpolationFnc: (value) => `${value}ml`
    },
    axisX: {
      labelInterpolationFnc: showNthLabel(7)
    }
  }

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
    <Chart data={data} options={options} responsiveOptions={responsiveOptions}/>
  </div>
}

export default Stats
