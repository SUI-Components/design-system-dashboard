import {ChartColors, howLongInThePastWeeks} from './globalDefinitions.js'

const designers = [
  0, 0, 0, 0, 0, 1 /* week 43 */, 1 /* week 44 */, 1 /* week 45 */,
  2 /* week 46 */, 2 /* week 47 */, 2 /* week 48 */, 0 /* week 49 */,
  1 /* week 50 */, 0 /* week 51 */, 0 /* week 52 */, 0 /* week 1 */,
  0 /* week 2 */, 5 /* week 3 */, 1 /* week 4 */, 6 /* week 5 */,
  4 /* week 6 */, 11 /* week 7 */, 0 /* week 8 */, 3 /* week 9 */,
  5 /* week 10 */, 3 /* week 11 */, 6 /* week 12 */, 2 /* week 13 */,
  4 /* week 14 */, 4 /* week 15 */, 0 /* week 16 */, 2 /* week 17 */,
  3 /* week 18 */, 5 /* week 19 */, 5 /* week 20 */, 4 /* week 21 */,
  5 /* week 22 */, 5 /* week 23 */, 4 /* week 24 */, 5 /* week 25 */,
  5 /* week 26 */, 4 /* week 27 */, 3 /* week 28 */, 3 /* week 29 */,
  0 /* week 30 */, 6 /* week 31 */, 5 /* week 32 */, 4 /* week 33 */,
  3 /* week 34 */, 1 /* week 35 */, 3 /* week 36 */, 0 /* week 37 */,
  0 /* week 38 */, 1 /* week 39 */, 4 /* week 40 */, 0 /* week 41 */,
  5 /* week 42 */, 4 /* week 43 */, 0 /* week 44 */, 4 /* week 45 */,
  0 /* week 46 */, 1 /* week 47 */, 2 /* week 48 */, 0 /* week 49 */,
  4 /* week 50 */, 0 /* week 51 */, 0 /* week 52 */, 0 /* week 1 */,
  0 /* week 2 */, 3 /* week 3 */, 1 /* week 4 */
].slice(howLongInThePastWeeks)
//
const developers = [
  0, 0, 0, 0, 0, 3 /* week 43 */, 2 /* week 44 */, 3 /* week 45 */,
  1 /* week 46 */, 1 /* week 47 */, 2 /* week 48 */, 0 /* week 49 */,
  1 /* week 50 */, 0 /* week 51 */, 0 /* week 52 */, 0 /* week 1 */,
  0 /* week 2 */, 3 /* week 3 */, 3 /* week 4 */, 3 /* week 5 */,
  2 /* week 6 */, 2 /* week 7 */, 0 /* week 8 */, 2 /* week 9 */,
  2 /* week 10 */, 2 /* week 11 */, 1 /* week 12 */, 2 /* week 13 */,
  1 /* week 14 */, 1 /* week 15 */, 0 /* week 16 */, 2 /* week 17 */,
  2 /* week 18 */, 2 /* week 19 */, 1 /* week 20 */, 2 /* week 21 */,
  1 /* week 22 */, 1 /* week 23 */, 5 /* week 24 */, 2 /* week 25 */,
  0 /* week 26 */, 1 /* week 27 */, 1 /* week 28 */, 5 /* week 29 */,
  0 /* week 30 */, 0 /* week 31 */, 0 /* week 32 */, 0 /* week 33 */,
  1 /* week 34 */, 0 /* week 35 */, 1 /* week 36 */, 0 /* week 37 */,
  0 /* week 38 */, 1 /* week 39 */, 1 /* week 40 */, 0 /* week 41 */,
  1 /* week 42 */, 1 /* week 43 */, 0 /* week 44 */, 1 /* week 45 */,
  0 /* week 46 */, 1 /* week 47 */, 1 /* week 48 */, 0 /* week 49 */,
  0 /* week 50 */, 0 /* week 51 */, 0 /* week 52 */, 0 /* week 1 */,
  0 /* week 2 */, 1 /* week 3 */, 1 /* week 4 */
].slice(howLongInThePastWeeks)

export const weeklies = [
  {
    label: 'Developers',
    data: developers,
    backgroundColor: ChartColors.red,
    borderColor: ChartColors.red,
    fill: false,
    lineTension: 0
  },
  {
    label: 'Designers',
    data: designers,
    backgroundColor: ChartColors.blue,
    borderColor: ChartColors.blue,
    fill: false,
    lineTension: 0
  }
]
