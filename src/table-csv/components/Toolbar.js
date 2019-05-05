import React, { useContext, useState } from 'react'
import { addColumn, addRow, removeColumn, removeRow } from '../actions'
import { ContentContext } from '../contexts'

export default () => {
  const [{ content }, dispatch] = useContext(ContentContext)
  const [header] = content
  const [row, setRow] = useState(1)
  const [column, setColumn] = useState(1)

  return (
    <div data-testid="toolbar" className="toolbar">
      <div className="toolbar__row">
        <input
          data-testid="row-add"
          className="button button--primary"
          type="button"
          value="Add Row"
          onClick={() => dispatch(addRow(Number(row)))}
        />
        <input
          data-testid="row-remove"
          className="button button--primary"
          type="button"
          value="Remove Row"
          onClick={() => dispatch(removeRow(Number(row)))}
        />
        <input
          data-testid="row-input"
          className="input-number"
          type="number"
          value={row}
          min="1"
          max={content.length}
          onChange={e => setRow(e.target.value)}
        />
      </div>
      <div className="toolbar__row">
        <input
          data-testid="column-add"
          className="button button--primary"
          type="button"
          value="Add Column"
          onClick={() => dispatch(addColumn(Number(column)))}
        />
        <input
          data-testid="column-remove"
          className="button button--primary"
          type="button"
          value="Remove Column"
          onClick={() => dispatch(removeColumn(Number(column)))}
        />
        <input
          data-testid="column-input"
          className="input-number"
          type="number"
          value={column}
          min="1"
          max={header ? header.length + 1 : 1}
          onChange={e => setColumn(e.target.value)}
        />
      </div>
    </div>
  )
}
