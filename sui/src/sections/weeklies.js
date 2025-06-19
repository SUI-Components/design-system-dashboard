import React from 'react'

import Chart from '../components/chart.js'
import {week} from '../data/dates.js'
import {weeklies} from '../data/weeklies.js'

// N/A in 2025

export default function Weeklies() {
  return (
    <>
      <div className="chart">
        <h3>
          <img
            src="/scmspain/design-systems/dist/images/GitHub.png"
            alt="github"
          />
          <div>
            Weekly attendance split by discipline
            <ul className="legends">
              <li className="red">Developers</li>
              <li className="blue">Designers</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={15}
          Height={80}
          MonthsOrWeeks={week}
          DataToShow={weeklies}
        />
      </div>
    </>
  )
}
