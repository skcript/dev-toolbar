import React from 'react'

export default function ENVLabel() {
  return (
    <div>{process.env.NODE_ENV}</div>
  )
}
