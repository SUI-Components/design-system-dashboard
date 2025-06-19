import React from 'react'

import Chart from '../components/chart.js'
import {month} from '../data/dates.js'
import {slack} from '../data/slack.js'

// N/A in 2025

export default function Slack() {
  return (
    <>
      <div className="chart">
        <h3>
          <img
            src="/scmspain/design-systems/dist/images/Slack.png"
            alt="SUI Logo"
          />
          <div>
            Slack Channel Activity
            <ul className="legends">
              <li className="blue">Reactions</li>
              <li className="green">Messages</li>
              <li className="white">Members who posted</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={320}
          Height={80}
          MonthsOrWeeks={month}
          DataToShow={slack}
        />
      </div>
    </>
  )
}
