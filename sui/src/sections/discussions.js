import React from 'react'

import Chart from '../components/chart.js'
import {month} from '../data/dates.js'
import {discussions} from '../data/discussions.js'

export default function Issues() {
  return (
    <>
      <div className="chart" id="issues">
        <h3>
          <img
            src="/scmspain/design-systems/dist/images/GitHub.png"
            alt="github"
          />
          <div>
            Discussions
            <ul className="legends">
              <li className="white">Total</li>
              <li className="green">Done</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={40}
          Height={80}
          MonthsOrWeeks={month}
          DataToShow={discussions}
        />
      </div>
    </>
  )
}
