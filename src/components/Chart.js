import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles/index";

import * as Chartist from 'chartist'
import 'chartist/dist/scss/chartist.scss'

const useStyles = makeStyles(theme => ({
  chartWrapper: {
    marginBottom: 30
  }
}))

const Chart = ({data, title, options, responsiveOptions}) => {
  const classes = useStyles()

  const chartRef = React.createRef()

  const [chartist, setChartist] = useState(null)

  useEffect(() => {
    chartist && chartist.detach()
    setChartist(Chartist.Line(chartRef.current, data, options, responsiveOptions))

    return () => chartist && chartist.detach()
  }, [chartRef, data, options, responsiveOptions, chartist, setChartist])

  chartist && chartist.update(data, options)
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
