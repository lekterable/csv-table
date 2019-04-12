import React, { useContext, useState } from 'react'
import { ContentContext } from '../contexts'

export default () => {
  const [{ content }, dispatch] = useContext(ContentContext)
  const [header] = content
  const [row, setRow] = useState(1)
  const [column, setColumn] = useState(1)

  return (
    <div>
      <div>
        <input
          type="button"
          value="Add Row"
          onClick={() => dispatch({ type: 'ADD_ROW', rowIndex: Number(row) })}
        />
        <input
          type="button"
          value="Remove Row"
          onClick={() =>
            dispatch({ type: 'REMOVE_ROW', rowIndex: Number(row) })
          }
        />
        <input
          type="number"
          value={row}
          min="1"
          max={content.length}
          onChange={e => setRow(e.target.value)}
        />
      </div>
      <div>
        <input
          type="button"
          value="Add Column"
          onClick={() =>
            dispatch({ type: 'ADD_COLUMN', colIndex: Number(column) })
          }
        />
        <input
          type="button"
          value="Remove Column"
          onClick={() =>
            dispatch({ type: 'REMOVE_COLUMN', colIndex: Number(column) })
          }
        />
        <input
          type="number"
          value={column}
          min="1"
          max={header.length + 1}
          onChange={e => setColumn(e.target.value)}
        />
      </div>
    </div>
  )
}
