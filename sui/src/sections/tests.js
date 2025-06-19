import React from 'react'

import Chart from '../components/chart.js'
import {week} from '../data/dates.js'
import {testBranches, tests} from '../data/tests.js'

export default function ChartsSection() {
  return (
    <>
      <div className="chart">
        <h3>
          <img
            src="../dist/images/tests.png"
            alt="tests"
          />
          <div>
            Tests coverage in SUI Components
            <ul className="legends">
              <li className="white">Statements</li>
              <li className="blue">Branches</li>
              <li className="red">Functions</li>
              <li className="green">Lines</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={0}
          YmaxAxis={100}
          Height={80}
          MonthsOrWeeks={week}
          DataToShow={tests}
        />
      </div>
      <div className="chart">
        <h3>
          <img
            src="../dist/images/tests.png"
            alt="tests"
          />
          <div>
            Tests Coverage
            <ul className="legends">
              <li className="blue">Branches</li>
              <li className="white">Target for Q4 2022: 63%</li>
            </ul>
          </div>
        </h3>

        <Chart
          YminAxis={40}
          YmaxAxis={63}
          Height={80}
          MonthsOrWeeks={week}
          DataToShow={testBranches}
        />
      </div>
    </>
  )
}
