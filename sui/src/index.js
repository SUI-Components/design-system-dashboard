import '../../src/style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import StatusTable from './sections/statusTable.js'
import UsagePerBrand from './sections/usagePerBrand.js'
import UseRatio from './sections/useRatio.js'
import PullRequests from './sections/pullRequests.js'
import Issues from './sections/issues.js'
import GithubBreakdown from './sections/githubBreakdown.js'
import GithubCommits from './sections/githubCommits.js'
import Tests from './sections/tests.js'
import NavigationMenu from './sections/navigationMenu.js'
// import Slack from './sections/slack.js' NO data in 2025
// import Weeklies from './sections/weeklies.js' NO data in 2025
// import Discussions from './sections/discussions.js'
import UsagePerBrandEvolution from './sections/usagePerBrandEvolution.js'

ReactDOM.render(
  <>
    <section id="navigation">
      <NavigationMenu />
    </section>
    <section id="main">
      <section id="section-1">
        <article id="components">
          <h1>Design Systems</h1>
          <UseRatio />
          <StatusTable />
        </article>
      </section>
      <section id="section-2">
        <section id="uses-by-brand">
          <h2>Uses by brand</h2>
          <article id="uses-by-brand">
            <UsagePerBrand />
            <UsagePerBrandEvolution />
          </article>
        </section>
        <h2 id="vital-signs">Vital signs</h2>
        {/* <Slack />
        <h2 id="commits">Commits</h2> */}
        <GithubCommits />
        <GithubBreakdown />
        <h2 id="issues">Github issues</h2>
        <Issues />
        <h2 id="pull-requests">Pull Requests</h2>
        <PullRequests />
        <h2 id="tests">Tests coverage</h2>
        <Tests />
        {/* <h2 id="weekly-meetings">Weekly meetings</h2> */
        /* <Weeklies />
        <h2 id="discussions">Discussions</h2>
        <Discussions /> */}
      </section>
    </section>
  </>,
  document.getElementById('root')
)
