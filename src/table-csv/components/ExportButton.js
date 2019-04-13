import React from 'react'
import { CSVLink } from 'react-csv'

export default ({ data }) => {
  return (
    <CSVLink data={data} filename={'react-csv.csv'}>
      <input type="button" value="Export" />
    </CSVLink>
  )
}
