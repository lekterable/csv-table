import React from 'react'

export default ({ data }) => {
  const [header, ...rows] = [...data]

  return (
    <table>
      <thead>
        <tr>
          {header.map((cell, index) => (
            <td key={index}>{cell}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
