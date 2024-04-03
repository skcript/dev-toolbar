/* eslint-disable @next/next/no-img-element */
import React from 'react'

import DevToolbar from '@/.'

const MemoryTester = () => {
  const [rows, setRows] = React.useState(10)

  const increaseRows = () => {
    setRows(rows + 1000)
  }

  const resetRows = () => {
    setRows(100)
  }

  const renderItems = () => {
    const items = []
    for (let i = 0; i < rows; i++) {
      items.push(
        <p
          key={i}
          style={{
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}
        >
          {i + 1} Box
        </p>
      )
    }
    return items
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '0.2rem',
          marginBottom: '1rem'
        }}
      >
        <button onClick={() => increaseRows()}>Increase Box</button>
        <button onClick={() => resetRows()}>Reset</button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem'
        }}
      >
        {renderItems()}
      </div>
      <DevToolbar />
    </div>
  )
}
export default {
  title: 'MemoryTester',
  component: MemoryTester
}

const Template: any = (args: any) => <MemoryTester {...args} />

export const Primary = Template.bind({})
Primary.args = {
  ratio: 16 / 9,
  children: (
    <img
      className='Image'
      src='https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80'
      alt='Landscape photograph by Tobias Tullius'
    />
  )
}
