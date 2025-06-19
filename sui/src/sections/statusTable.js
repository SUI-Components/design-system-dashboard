import React from 'react'

import PropTypes from 'prop-types'

const ComponentRow = props => {
  return (
    <tr>
      <td>
        <a
          href={props.url}
          className={props.unused ? 'unused' : undefined}
          target="blank"
        >
          {props.name}
        </a>{' '}
        {props.new === true && <span className="pill">NEW</span>}
      </td>
      <td
        htmlFor="IJ"
        version={props.IJoutdated ? 'outdated' : undefined}
        className={props.IJuses}
      >
        {' '}
      </td>
      <td
        htmlFor="MA"
        version={props.MAoutdated ? 'outdated' : undefined}
        className={props.MAuses}
      >
        {' '}
      </td>
      <td
        htmlFor="CN"
        version={props.CNoutdated ? 'outdated' : undefined}
        className={props.CNuses}
      >
        {' '}
      </td>

      <td
        htmlFor="CF"
        version={props.CFoutdated ? 'outdated' : undefined}
        className={props.CFuses}
      >
        {' '}
      </td>
      <td
        htmlFor="EP"
        version={props.EPoutdated ? 'outdated' : undefined}
        className={props.EPuses}
      >
        {' '}
      </td>
      <td
        htmlFor="FC"
        version={props.FCoutdated ? 'outdated' : undefined}
        className={props.FCuses}
      >
        {' '}
      </td>
      <td
        htmlFor="OT"
        version={props.OToutdated ? 'outdated' : undefined}
        className={props.OTuses}
      >
        {' '}
      </td>
      <td
        htmlFor="HB"
        version={props.HBoutdated ? 'outdated' : undefined}
        className={props.HBuses}
      >
        {' '}
      </td>
      <td
        htmlFor="ADIT"
        version={props.ADIToutdated ? 'outdated' : undefined}
        className={props.ADITuses}
      >
        {' '}
      </td>
    </tr>
  )
}

const WHEREISUSED = {
  WEBAPP: 'webapp',
  UILIB: 'uilib-widgets',
  BOTH: 'both'
}

ComponentRow.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  new: PropTypes.bool,
  unused: PropTypes.bool,
  IJuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  MAuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  CNuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  CFuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  EPuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  FCuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  OTuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  HBuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  ADITuses: PropTypes.oneOf(Object.values(WHEREISUSED)),
  IJoutdated: PropTypes.bool,
  MAoutdated: PropTypes.bool,
  CNoutdated: PropTypes.bool,
  CFoutdated: PropTypes.bool,
  EPoutdated: PropTypes.bool,
  FCoutdated: PropTypes.bool,
  OToutdated: PropTypes.bool,
  HBoutdated: PropTypes.bool,
  ADIToutdated: PropTypes.bool
}

export default function StatusTable() {
  return (
    <>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/ij.png"
                  alt="InfoJobs Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/ma.png"
                  alt="Milanuncios Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/cn.png"
                  alt="Coches.net Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/cf.png"
                  alt="CarFactory Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/ep.png"
                  alt="ePreselec Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/fc.png"
                  alt="Fotocasa Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/ot.png"
                  alt="OneTool Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/hb.png"
                  alt="habitaclia Logo"
                />
              </th>
              <th>
                <img
                  className="brand-logo"
                  src="/scmspain/design-systems/dist/images/adit.png"
                  alt="Advertising Logo"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <ComponentRow
              name="Accordion"
              url="https://sui-components.now.sh/workbench/molecule/accordion/demo"
              // --------- These brands need to update to latest
              FCoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              IJuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
            />
            <ComponentRow
              name="Action Button"
              url="https://sui-components.now.sh/workbench/atom/actionButton/"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Autosuggest"
              url="https://sui-components.now.sh/workbench/molecule/autosuggest"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              IJuses="webapp"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Autosuggest field"
              url="https://sui-components.now.sh/workbench/molecule/autosuggestField"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              OTuses="webapp"
              IJuses="webapp"
              EPuses="uilib-widgets"
            />
            <ComponentRow
              name="Avatar"
              url="https://sui-components.now.sh/workbench/molecule/avatar/"
              MAuses="both"
              OTuses="webapp"
              CNuses="webapp"
              CFuses="webapp"
              IJ="webapp"
            />
            <ComponentRow
              name="Back to top"
              url="https://sui-components.now.sh/workbench/atom/backToTop"
              CFuses="webapp"
            />
            <ComponentRow
              name="Badge"
              url="https://sui-components.now.sh/workbench/atom/badge"
              // --------- These brands need to update to latest
              FCoutdated
              HBoutdated
              EPoutdated
              OToutdateds
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              HBuses="webapp"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Badge counter"
              url="https://sui-components.now.sh/workbench/molecule/badgeCounter"
              IJuses="uilib-widgets"
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Breadcrumb"
              url="https://sui-components.now.sh/workbench/molecule/breadcrumb"
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Button"
              url="https://sui-components.now.sh/workbench/atom/button"
              // --------- These brands need to update to latest
              MAoutdated
              CFoutdated
              CNoutdated
              FCoutdated
              HBoutdated
              IJoutdated
              OToutdated
              EPoutdated
              ADIToutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              HBuses="uilib-widgets"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Buttons Group"
              url="https://sui-components.now.sh/workbench/molecule/buttonGroup"
              // --------- These brands need to update to latest
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              HBuses="webapp"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Buttons Group field"
              url="https://sui-components.now.sh/workbench/molecule/buttonGroupField"
              // --------- These brands need to update to latest
              MAoutdated
              CFoutdated
              CNoutdated
              FCoutdated
              ADIToutdated
              IJoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              IJ="webapp"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Card"
              url="https://sui-components.now.sh/workbench/atom/card"
              CFuses="webapp"
              CNuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
            />
            <ComponentRow
              name="Carousel"
              url="https://sui-components.now.sh/workbench/molecule/carousel"
              MAuses="both"
              CNuses="webapp"
              CFuses="webapp"
              FCuses="webapp"
            />
            <ComponentRow
              name="Checkbox"
              url="https://sui-components.now.sh/workbench/atom/checkbox"
              // --------- These brands need to update to latest
              MAoutdated
              CFoutdated
              CNoutdated
              OToutdated
              HBoutdated
              ADIToutdated
              EPoutdated
              IJoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Checkbox field"
              url="https://sui-components.now.sh/workbench/molecule/checkboxField"
              // --------- These brands need to update to latest
              MAoutdated
              CFoutdated
              CNoutdated
              HBoutdated
              ADIToutdated
              EPoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="webapp"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Collapsible"
              url="https://sui-components.now.sh/workbench/molecule/collapsible"
              MAuses="webapp"
              CNuses="both"
              FCuses="webapp"
              HBuses="uilib-widgets"
              IJuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Data Counter"
              url="https://sui-components.now.sh/workbench/molecule/dataCounter"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Drawer"
              url="https://sui-components.now.sh/workbench/molecule/drawer"
              // --------- These brands need to update to latest
              // FCoutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              IJuses="webapp"
            />
            <ComponentRow
              name="Dropdown list"
              url="https://sui-components.now.sh/workbench/molecule/dropdownList"
              // --------- These brands need to update to latest
              MAoutdated
              FCoutdated
              ADIToutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Dropdown Options"
              url="https://sui-components.now.sh/workbench/molecule/dropdownOption"
              // --------- These brands need to update to latest
              CFoutdated
              CNoutdated
              FCoutdated
              HBoutdated
              ADIToutdated
              EPoutdated
              IJoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Field"
              url="https://sui-components.now.sh/workbench/molecule/field"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Grid"
              url="https://sui-components.now.sh/workbench/layout/grid"
              CFuses="webapp"
              CNuses="webapp"
              IJuses="webapp"
              FCuses="webapp"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Help texts"
              url="https://sui-components.now.sh/workbench/atom/helpText"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Icon"
              url="https://sui-components.now.sh/workbench/atom/icon"
              MAuses="both"
              CFuses="both"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Image"
              url="https://sui-components.now.sh/workbench/atom/image"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="webapp"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Image editor"
              url="https://sui-components.now.sh/workbench/molecule/imageEditor"
              CFuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Injector"
              url="https://sui-components.vercel.app/workbench/primitive/injector/demo"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Input"
              url="https://sui-components.now.sh/workbench/atom/input"
              // --------- These brands need to update to latest
              CFoutdated
              CNoutdated
              HBoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Input field"
              url="https://sui-components.now.sh/workbench/molecule/inputField"
              // --------- These brands need to update to latest
              CFoutdated
              CNoutdated
              HBoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="webapp"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Input tags"
              url="https://sui-components.now.sh/workbench/molecule/inputTags"
              // --------- These brands need to update to latest
              MAoutdated
              HBoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="webapp"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="KBD"
              url="https://sui-components.vercel.app/workbench/atom/kbd/"
            />
            <ComponentRow
              name="LinkBox"
              url="https://sui-components.vercel.app/workbench/primitive/linkBox/"
              IJuses="both"
            />
            <ComponentRow
              name="Label"
              url="https://sui-components.now.sh/workbench/atom/label"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Loading icon"
              url="https://sui-components.vercel.app/workbench/primitive/loadingIcon/"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Modal"
              url="https://sui-components.now.sh/workbench/molecule/modal"
              // --------- These brands need to update to latest
              CFoutdated
              CNoutdated
              FCoutdated
              HBoutdated
              IJoutdated
              EPoutdated
              OToutdated
              ADIToutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Nested Checkboxes"
              url="https://sui-components.now.sh/workbench/organism/nestedCheckboxes"
              // --------- These brands need to update to latest
              FCoutdated
              // ---------
              FCuses="both"
            />
            <ComponentRow
              name="Notification"
              url="https://sui-components.now.sh/workbench/molecule/notification"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Pagination"
              url="https://sui-components.now.sh/workbench/molecule/pagination"
              MAuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              HBuses="webapp"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Panel"
              url="https://sui-components.now.sh/workbench/atom/panel"
              CFuses="webapp"
              CNuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
            />
            <ComponentRow
              name="Photo Uploader"
              url="https://sui-components.now.sh/workbench/molecule/photoUploader"
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
            />
            <ComponentRow
              name="Pin Input"
              url="https://sui-components.vercel.app/workbench/atom/pinInput"
              MAuses="webapp"
              CNuses="webapp"
              FCuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Polymorphic Element"
              url="https://sui-components.vercel.app/workbench/primitive/polymorphicElement/demo"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Popover"
              url="https://sui-components.now.sh/workbench/atom/popover"
              // --------- These brands need to update to latest
              EPoutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Progress bar"
              url="https://sui-components.now.sh/workbench/atom/progressBar"
              // --------- These brands need to update to latest
              // CFoutdated
              // IJoutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              IJuses="both"
            />
            <ComponentRow
              name="Progress steps"
              url="https://sui-components.now.sh/workbench/molecule/progressSteps"
              // --------- These brands need to update to latest
              CNoutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              IJuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Quick action"
              url="https://sui-components.now.sh/workbench/molecule/quickAction"
              CNuses="webapp"
            />
            <ComponentRow
              name="Radio-button"
              url="https://sui-components.now.sh/workbench/atom/radioButton"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              HBuses="uilib-widgets"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Radio-button Field"
              url="https://sui-components.now.sh/workbench/molecule/radioButtonField"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              HBuses="uilib-widgets"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Radio-button Group"
              url="https://sui-components.now.sh/workbench/molecule/radioButtonGroup"
              // --------- These brands need to update to latest
              MAoutdated
              OToutdated
              FCoutdated
              ADIToutdated
              EPoutdated
              IJoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              HBuses="uilib-widgets"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Rating"
              url="https://sui-components.now.sh/workbench/molecule/rating"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              IJuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Select"
              url="https://sui-components.now.sh/workbench/molecule/select"
              // --------- These brands need to update to latest
              MAoutdated
              FCoutdated
              HBoutdated
              EPoutdated
              OToutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Select Field"
              url="https://sui-components.now.sh/workbench/molecule/selectField"
              // --------- These brands need to update to latest
              MAoutdated
              FCoutdated
              HBoutdated
              EPoutdated
              OToutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="uilib-widgets"
              IJuses="webapp"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Select popover"
              url="https://sui-components.now.sh/workbench/molecule/selectPopover"
              // --------- These brands need to update to latest
              MAoutdated
              CFoutdated
              FCoutdated
              OToutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Skeleton"
              url="https://sui-components.now.sh/workbench/atom/skeleton"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              IJuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Slider"
              url="https://sui-components.now.sh/workbench/atom/slider"
              MAuses="both"
              CNuses="webapp"
              CFuses="webapp"
              FCuses="both"
              IJuses="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Spinner"
              url="https://sui-components.now.sh/workbench/atom/spinner"
              // --------- These brands need to update to latest
              MAoutdated
              HBoutdated
              EPoutdated
              IJoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Stepper"
              url="https://sui-components.vercel.app/workbench/molecule/stepper/demo"
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="webapp"
              IJ="webapp"
              OTuses="webapp"
            />
            <ComponentRow
              name="Sticky behaviour"
              url="https://sui-components.now.sh/workbench/behavior/sticky"
              CNuses="webapp"
              IJuses="webapp"
            />
            <ComponentRow
              name="Switch"
              url="https://sui-components.now.sh/workbench/atom/switch"
              // --------- These brands need to update to latest
              MAoutdated
              CFoutdated
              FCoutdated
              OToutdated
              ADIToutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              IJuses="both"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Table"
              url="https://sui-components.now.sh/workbench/atom/table"
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Tabs"
              url="https://sui-components.now.sh/workbench/molecule/tabs"
              MAuses="both"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Tag"
              url="https://sui-components.now.sh/workbench/atom/tag"
              // --------- These brands need to update to latest
              MAoutdated
              FCoutdated
              HBoutdated
              EPoutdated
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="webapp"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Text Area"
              url="https://sui-components.now.sh/workbench/atom/textarea"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Text Area Field"
              url="https://sui-components.now.sh/workbench/molecule/textareaField"
              // --------- These brands need to update to latest
              //
              // ---------
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Thumbnail"
              url="https://sui-components.now.sh/workbench/molecule/thumbnail"
              CNuses="webapp"
              IJuses="both"
              EPuses="uilib-widgets"
            />
            <ComponentRow
              name="Toast"
              url="https://sui-components.now.sh/workbench/atom/toast"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Tooltip"
              url="https://sui-components.now.sh/workbench/atom/tooltip"
              // --------- These brands need to update to latest
              MAoutdated
              CNoutdated
              HBoutdated
              EPoutdated
              IJoutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
            />
            <ComponentRow
              name="Typography"
              url="https://sui-components.vercel.app/workbench/primitive/typography/"
            />
            <ComponentRow
              name="Upload"
              url="https://sui-components.now.sh/workbench/atom/upload"
              // --------- These brands need to update to latest
              CFoutdated
              // ---------
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              IJuses="both"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="usePortal"
              url="https://sui-components.vercel.app/workbench/hook/usePortal/demo"
              MAuses="webapp"
              CFuses="webapp"
              CNuses="webapp"
              FCuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Validation text"
              url="https://sui-components.now.sh/workbench/atom/validationText"
              MAuses="both"
              CFuses="webapp"
              CNuses="both"
              FCuses="both"
              HBuses="both"
              IJuses="both"
              EPuses="uilib-widgets"
              OTuses="webapp"
              ADITuses="uilib-widgets"
            />
            <ComponentRow
              name="Validation Code"
              url="https://sui-components.vercel.app/workbench/molecule/validationCode"
              CNuses="webapp"
              FCuses="both"
              OTuses="webapp"
            />
            <ComponentRow
              name="Video Player"
              url="https://sui-components.vercel.app/workbench/atom/videoPlayer/"
              CFuses="webapp"
              CNuses="webapp"
            />
            <ComponentRow
              name="Visually hidden"
              url="https://sui-components.vercel.app/workbench/primitive/visuallyHidden/"
              IJuses="both"
              CNuses="webapp"
              CFuses="webapp"
            />
          </tbody>
        </table>
        <a href="./dist/raw-numbers-sui.json" target="_blank">
          Check the Raw Data (JSON)
        </a>
      </div>
    </>
  )
}
