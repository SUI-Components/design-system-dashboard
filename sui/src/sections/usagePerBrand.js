import React from 'react'

export default function UsagePerBrand() {
  return (
    <>
      <div className="chart" id="current-status">
        <h3>Current status</h3>
        <ul>
          <li htmlFor="ij">
            <div>InfoJobs</div>
            <span className="pill">53</span>
            <progress value="53" max="74" />
          </li>
          <li htmlFor="ma">
            <div>Milanuncios</div>
            <span className="pill">59</span>
            <progress value="59" max="74" />
          </li>
          <li htmlFor="cn">
            <div>Coches.net</div>
            <span className="pill">69</span>
            <progress value="69" max="74" />
          </li>
          <li htmlFor="cf">
            <div>Coches.net PRO</div>
            <span className="pill">63</span>
            <progress value="63" max="74" />
          </li>
          <li htmlFor="ep">
            <div>ePreselec</div>
            <span className="pill">39</span>
            <progress value="39" max="74" />
          </li>
          <li htmlFor="fc">
            <div>Fotocasa</div>
            <span className="pill">58</span>
            <progress value="58" max="74" />
          </li>
          <li htmlFor="ot">
            <div>Fotocasa PRO</div>
            <span className="pill">57</span>
            <progress value="57" max="74" />
          </li>
          <li htmlFor="hb">
            <div>habitaclia</div>
            <span className="pill">32</span>
            <progress value="32" max="74" />
          </li>
          <li htmlFor="adit">
            <div>Advertising</div>
            <span className="pill">30</span>
            <progress value="30" max="74" />
          </li>
        </ul>
      </div>
    </>
  )
}
