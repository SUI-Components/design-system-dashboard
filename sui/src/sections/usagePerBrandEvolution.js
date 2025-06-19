import React from 'react'

import Chart from '../components/chart.js'
import {week} from '../data/dates.js'
import {usesByBrand} from '../data/usesByBrand.js'

export default function UsagePerBrandEvolution() {
  return (
    <>
      <div className="chart" id="evolution">
        <h3>Evolution over time</h3>
        <Chart
          YminAxis={0}
          YmaxAxis={70}
          Height={250}
          MonthsOrWeeks={week}
          DataToShow={usesByBrand}
        />
      </div>
    </>
  )
}
