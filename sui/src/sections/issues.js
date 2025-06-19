import React from 'react'

import Chart from '../components/chart.js'
import {month} from '../data/dates.js'
import {issues} from '../data/issues.js'

export default function Issues() {
  return (
    <>
      <div className="chart" id="issues">
        <h3>
          <img
            src="../dist/images/GitHub.png"
            alt="github"
          />
          <div>
            Issues
            <ul className="legends">
              <li className="red">Created</li>
              <li className="green">Resolved</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={100}
          Height={80}
          MonthsOrWeeks={month}
          DataToShow={issues}
        />
      </div>
    </>
  )
}
