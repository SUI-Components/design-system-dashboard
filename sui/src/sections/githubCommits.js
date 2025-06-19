import React from 'react'

import Chart from '../components/chart.js'
import {totalCommits} from '../data/commits.js'
import {month} from '../data/dates.js'

export default function GithubCommits() {
  return (
    <>
      <div className="chart" id="total-commits">
        <h3>
          <img
            src="../../../dist/images/GitHub.png"
            alt="github"
          />
          <div>
            Total Commits
            <ul className="legends">
              <li className="white">SUI Components + Tools</li>
            </ul>
          </div>
        </h3>
        <Chart
          YminAxis={0}
          YmaxAxis={600}
          Height={80}
          MonthsOrWeeks={month}
          DataToShow={totalCommits}
        />
      </div>
    </>
  )
}
