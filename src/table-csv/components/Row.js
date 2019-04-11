import React from 'react'
import Cell from './Cell'

export default ({ header, cells }) => {
  return (
    <tr>
      {cells.map((cell, index) => (
        <Cell key={index} value={cell} header={header} />
      ))}
    </tr>
  )
}
