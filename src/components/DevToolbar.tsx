import React from 'react'

import "../styles/globals.scss"
import ENVLabel from './metrics/ENVLabel'
import PerfMetrics from './metrics/PerfMetrics'

export default function DevToolbar() {
  return (
    <div className='devbar-root'>
      <div className='devbar-rightpanel'>
        <strong>DevToolbar</strong>
        <ENVLabel />
      </div>
      <div className='devbar-leftpanel'>
        <PerfMetrics />
      </div>
    </div>
  )
}
