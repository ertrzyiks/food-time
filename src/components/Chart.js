import React, { useEffect, useState } from 'react'

import * as Chartist from 'chartist'
import 'chartist/dist/scss/chartist.scss'

const Chart = ({data, options, responsiveOptions}) => {
  const chartRef = React.createRef()

  const [chartist, setChartist] = useState(null)

  useEffect(() => {
    chartist && chartist.detach()
    setChartist(Chartist.Line(chartRef.current, data, options, responsiveOptions))

    return () => chartist && chartist.detach()
  }, [chartRef, data, options, responsiveOptions, chartist, setChartist])

  chartist && chartist.update(data, options)
  return <div ref={chartRef}></div>
}

export default Chart
