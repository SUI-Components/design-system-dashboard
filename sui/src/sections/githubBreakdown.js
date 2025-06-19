import React from 'react'

import Chart from '../components/chart.js'
import {commitsBreakdown} from '../data/commits.js'
import {month} from '../data/dates.js'

export default function GithubBreakdown() {
  return (
    <>
      <div className="chart" id="commits-breakdown">
        <h3>
          <img
            src="../../../dist/images/GitHub.png"
            alt="github"
          />
          <div>
            Total Commits Breakdown
            <ul className="legends">
              <li className="white">SUI Tools</li>
              <li className="blue">SUI Components</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={600}
          Height={80}
          MonthsOrWeeks={month}
          DataToShow={commitsBreakdown}
        />
      </div>
    </>
  )
}
