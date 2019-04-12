import React, { useReducer } from 'react'
import Row from './components/Row'
import { ContentContext, ModeContext } from './contexts'
import reducer from './reducers'

export default ({ data, editable }) => {
  const [header, ...rows] = [...data]
  const [state, dispatch] = useReducer(reducer, data)

  return (
    <ModeContext.Provider value={{ isEditable: Boolean(editable) }}>
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
    </ModeContext.Provider>
  )
}
