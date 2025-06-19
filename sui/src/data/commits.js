import {ChartColors, howLongInThePastMonths} from './globalDefinitions.js'

const commitsSUI = [
  // https://github.com/SUI-Components/sui/pulse/monthly
  87 /* April 2019 */, 60 /* May 2019 */, 46 /* June 2019 */,
  84 /* July 2019 */, 29 /* August 2019 */, 37 /* September 2019 */,
  91 /* October 2019 */, 68 /* November 2019 */, 44 /* December 2019 */,
  126 /* January 2020 */, 85 /* February 2020 */, 109 /* March 2020 */,
  52 /* April 2020 */, 122 /* May 2020 */, 143 /* June 2020 */,
  122 /* July 2020 */, 23 /* August 2020 */, 190 /* September 2020 */,
  142 /* October 2020 */, 201 /* November 2020 */, 155 /* December 2020 */,
  31 /* January 2021 */, 125 /* February 2021 */, 139 /* March 2021 */,
  58 /* April 2021 */, 143 /* May 2021 */, 91 /* June 2021 */,
  65 /* July 2021 */, 33 /* August 2021 */, 35 /* September 2021 */,
  111 /* October 2021 */, 137 /* November 2021 */, 50 /* December 2021 */,
  140 /* January 2022 */, 138 /* February 2022 */, 62 /* March 2022 */,
  69 /* April 2022 */, 89 /* May 2022 */, 124 /* June 2022 */,
  50 /* July 2022 */, 48 /* August 2022 */, 20 /* September 2022 */,
  84 /* October 2022 */, 82 /* November 2022 */, 36 /* December 2022 */,
  13 /* January 2025 */
].slice(howLongInThePastMonths)
//
const commitsSuiComponents = [
  // https://github.com/SUI-Components/sui-components/pulse/monthly
  102 /* April 2019 */,
  26 /* May 2019 */,
  45 /* June 2019 */,
  49 /* July 2019 */,
  92 /* August 2019 */,
  70 /* September 2019 */,
  211 /* October 2019 */,
  103 /* November 2019 */,
  146 /* December 2019 */,
  202 /* January 2020 */,
  147 /* February 2020 */,
  255 /* March 2020 */,
  96 /* April 2020 */,
  223 /* May 2020 */,
  78 /* June 2020 */,
  170 /* July 2020 */,
  24 /* August 2020 */,
  86 /* September 2020 */,
  104 /* October 2020 */,
  267 /* November 2020 */,
  189 /* December 2020 */,
  115, // Enero 2020
  58 /* February 2021 */,
  71, // Marzo 2021
  60 /* April 2021 */,
  95 /* May 2021 */,
  69 /* June 2021 */,
  102 /* July 2021 */,
  130 /* August 2021 */,
  135 /* September 2021 */,
  384 /* October 2021 */,
  268 /* November 2021 */,
  47 /* December 2021 */,
  289 /* January 2022 */,
  221 /* February 2022 */,
  189 /* March 2022 */,
  127 /* April 2022 */,
  99 /* May 2022 */,
  211 /* June 2022 */,
  64 /* July 2022 */,
  44 /* August 2022 */,
  76 /* September 2022 */,
  263 /* October 2022 */,
  54 /* November 2022 */,
  10 /* December 2022 */,
  100 /* January 2025 */
].slice(howLongInThePastMonths)
//
const commitsTotal = [
  // sum commitsSuiComponents + commitsSUI
  197 /* April 2019 */,
  115 /* May 2019 */,
  128 /* June 2019 */,
  159 /* July 2019 */,
  140 /* August 2019 */,
  142 /* September 2019 */,
  408 /* October 2019 */,
  251 /* November 2019 */,
  242 /* December 2019 */,
  381 /* January 2020 */,
  287 /* February 2020 */,
  517 /* March 2020 */,
  259 /* April 2020 */,
  417 /* May 2020 */,
  302 /* June 2020 */,
  330 /* July 2020 */,
  73 /* August 2020 */,
  372 /* September 2020 */,
  295 /* October 2020 */,
  530 /* November 2020 */,
  395 /* December 2020 */,
  194, // Enero 2020
  235 /* February 2021 */,
  269, // Marzo 2021
  160 /* April 2021 */,
  275 /* May 2021 */,
  171 /* June 2021 */,
  171 /* July 2021 */,
  165 /* August 2021 */,
  172 /* September 2021 */,
  506 /* October 2021 */,
  411 /* November 2021 */,
  99 /* December 2021 */,
  429 /* January 2022 */,
  359 /* February 2022 */,
  251 /* March 2022 */,
  196 /* April 2022 */,
  188 /* May 2022 */,
  335 /* June 2022 */,
  114 /* July 2022 */,
  92 /* July 2022 */,
  96 /* September 2022 */,
  347 /* October 2022 */,
  136 /* November 2022 */,
  46 /* December 2022 */,
  113 /* January 2025 */
].slice(howLongInThePastMonths)

// Single line chart displaying total of commits
export const totalCommits = [
  {
    label: 'Total of Commits',
    data: commitsTotal,
    backgroundColor: ChartColors.white,
    borderColor: ChartColors.white,
    fill: false,
    lineTension: 0
  }
]

//  Chart displaying commits for SUI and SUI Components
export const commitsBreakdown = [
  {
    label: 'SUI',
    data: commitsSUI,
    backgroundColor: ChartColors.white,
    borderColor: ChartColors.white,
    fill: false,
    lineTension: 0
  },
  {
    label: 'SUI Components',
    data: commitsSuiComponents,
    backgroundColor: ChartColors.blue,
    borderColor: ChartColors.blue,
    fill: false,
    lineTension: 0
  }
]
