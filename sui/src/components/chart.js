import React from 'react'
import {Line} from 'react-chartjs-2'

export default function Chart({
  YminAxis,
  YmaxAxis,
  MonthsOrWeeks,
  DataToShow,
  Height
}) {
  return (
    <Line
      data={{
        labels: MonthsOrWeeks,
        datasets: DataToShow
      }}
      height={Height}
      options={{
        // maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                max: YmaxAxis,
                min: YminAxis
              }
            }
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                max: 50
              }
            }
          ]
        },
        animation: false,
        showLines: true,
        spanGaps: true,
        legend: false,
        elements: {
          point: {
            radius: 3
          }
        },
        responsive: true,
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        }
      }}
    />
  )
}
