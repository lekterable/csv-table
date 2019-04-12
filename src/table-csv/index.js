import React, { useReducer } from 'react'
import Row from './components/Row'
import { ContentContext } from './contexts'
import reducer from './reducers'

export default ({ data }) => {
  const [header, ...rows] = [...data]
  const [state, dispatch] = useReducer(reducer, data)

  return (
    <ContentContext.Provider value={[state, dispatch]}>
      <table>
        <thead>
          <Row header cells={header} />
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <Row key={index} rowIndex={index + 1} cells={row} />
          ))}
        </tbody>
      </table>
    </ContentContext.Provider>
  )
}
