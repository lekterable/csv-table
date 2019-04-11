import React from 'react'
import Row from './components/Row'

export default ({ data }) => {
  const [header, ...rows] = [...data]

  return (
    <table>
      <thead>
        <Row header cells={header} />
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Row key={index} cells={row} />
        ))}
      </tbody>
    </table>
  )
}
