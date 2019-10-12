import React, { useEffect, useRef } from 'react'
import { Typography } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles/index";

import * as Chartist from 'chartist'
import 'chartist/dist/scss/chartist.scss'

const useStyles = makeStyles(theme => ({
  chartWrapper: {
    marginBottom: 30
  }
}))

const Chart = ({type, data, title, options, responsiveOptions}) => {
  const classes = useStyles()

  const chartRef = React.createRef()
  const chartist = useRef(null)

  useEffect(() => {
    chartist.current && chartist.current.detach()
    switch(type) {
      case 'line':
        chartist.current = Chartist.Line(chartRef.current, data, options, responsiveOptions)
        break
      case 'bar':
        chartist.current = Chartist.Bar(chartRef.current, data, options, responsiveOptions)
        break
    }

    return () => chartist && chartist.current.detach()
  }, [chartist, chartRef, data, options, responsiveOptions])

  return (
    <div className={classes.chartWrapper}>
      <Typography variant="h6">
        {title}
      </Typography>
      <div ref={chartRef}></div>
    </div>
  )
}

export default Chart
