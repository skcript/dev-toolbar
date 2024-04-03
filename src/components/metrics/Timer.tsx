import React, { useMemo } from 'react'

export default function Timer() {
  const [currentTime, setCurrentTime] = React.useState(
    new Date().toLocaleTimeString()
  )

  useMemo(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>{currentTime}</div>
}
