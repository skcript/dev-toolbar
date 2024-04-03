import React, { useEffect } from 'react'


interface IPerformanceMetrics {
  memory?: {
    jsHeapSizeLimit: number,
    totalJSHeapSize: number,
    usedJSHeapSize: number,
    userMemory: number
  }
}

// Extend window.performance with userMemory
declare global {
  interface Window {
    performance: IPerformanceMetrics
  }
}

const humaizeMemory = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Byte'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
}

export default function PerfMetrics() {
  const [fps, setFps] = React.useState(0)
  const [performanceMetrics, setPerformanceMetrics] = React.useState<IPerformanceMetrics |null>(null)
  const [domSize, setDomSize] = React.useState<number | undefined>(undefined)

  const updateFPS = () => {
    let lastFrameTime = performance.now();
    let frameCount = 0;
    let totalFrames = 0;
    const fpsInterval = 300; // Update the FPS counter every second
    let startTime = lastFrameTime;
  
    // Setup the FPS display elemen
    function update() {
        const now = performance.now();
        const deltaTime = now - lastFrameTime;
        frameCount = frameCount + 1;
        totalFrames++;
  
        if (now - startTime > fpsInterval) {
            const fpsValue = Math.round((totalFrames * 1000) / (now - startTime));
            setFps(fpsValue);
            if (window && window.performance) {
              setPerformanceMetrics(window.performance);
            }

            try {
              const dSize = document.getElementsByTagName('*').length
              setDomSize(dSize)
            } catch (e) {
              console.error(e)
              setDomSize(undefined)
            }
            startTime = now;
            totalFrames = 0;
        }
  
        lastFrameTime = now;
        requestAnimationFrame(update);
    }
  
    requestAnimationFrame(update);
  }

  useEffect(() => {
      updateFPS()
  },[])


  return (
    <>
      <p>FPS: {fps}</p>
      {!!performanceMetrics?.memory && <p>M: {humaizeMemory(performanceMetrics.memory?.usedJSHeapSize)}</p>}
      {domSize !== undefined && <p>DOM Size: {domSize}</p>}
    </>
  )
}
