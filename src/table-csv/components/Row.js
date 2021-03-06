import React from 'react'
import Cell from './Cell'

export default ({ header, cells = [], rowIndex }) => {
  return (
    <tr
      data-testid={header ? 'table-header-row' : 'table-row'}
      className="table__row"
    >
      {cells.map((cell, index) => (
        <Cell
          key={index}
          rowIndex={header ? 0 : rowIndex}
          colIndex={index}
          value={cell}
          header={header}
        />
      ))}
    </tr>
  )
}
