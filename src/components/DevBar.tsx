import React from 'react'

import ENVLabel from './metrics/ENVLabel'
import PerfMetrics from './metrics/PerfMetrics'

export default function DevBar() {
  return (
    <div className='devbar-root'>
      <div className='devbar-rightpanel'>
        <strong>DevBar</strong>
        <ENVLabel />
      </div>
      <div className='devbar-leftpanel'>
        <PerfMetrics />
      </div>
    </div>
  )
}
