import React from 'react'

export default ({ header, value }) => {
  return header ? <th>{value}</th> : <td>{value}</td>
}
