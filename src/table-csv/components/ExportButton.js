import React from 'react'
import { CSVLink } from 'react-csv'

export default ({ data }) => {
  return (
    <CSVLink
      tabIndex="-1"
      className="export-link"
      data={data}
      filename={'react-csv.csv'}
    >
      <input
        className="button button--secondary"
        type="button"
        value="Export"
      />
    </CSVLink>
  )
}
