import React from 'react'

import Chart from '../components/chart.js'
import {month} from '../data/dates.js'
import {pullRequests} from '../data/pullRequests.js'

export default function PullRequests() {
  return (
    <>
      <div className="chart">
        <h3>
          <img
            src="../dist/images/GitHub.png"
            alt="github"
          />
          <div>
            Pull Requests
            <ul className="legends">
              <li className="white">Open</li>
              <li className="red">Closed</li>
              <li className="green">Merged</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={80}
          Height={80}
          MonthsOrWeeks={month}
          DataToShow={pullRequests}
        />
      </div>
    </>
  )
}
