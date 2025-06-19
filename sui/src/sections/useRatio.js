import React from 'react'

export default function UseRatio() {
  return (
    <>
      <h3>
        <img
          src="/scmspain/design-systems/dist/images/sui-logo.png"
          alt="SUI Logo"
        />
        <div>
          SUI Components
          <ul className="legends">
            <li className="webapp">WebApp</li>
            <li className="uilib-widgets">UI Lib Widgets</li>
            <li className="both">Both</li>
            <li className="both uilib-widgets" version="outdated">
              Outdated
            </li>
          </ul>
        </div>
      </h3>

      <div className="uses">
        <div className="number-of-uses">
          74
          <div>COMPONENTS</div>
        </div>
        <div className="number-of-uses">
          463
          <div>USES</div>
        </div>
        <div className="number-of-uses ratio-this-month">
          69% 
          <div>June 2025</div>
        </div>
      </div>
    </>
  )
}
