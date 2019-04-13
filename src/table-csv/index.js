import React, { useReducer } from 'react'
import ExportButton from './components/ExportButton'
import Row from './components/Row'
import Toolbar from './components/Toolbar'
import { ContentContext, ModeContext } from './contexts'
import { useUniqueKeys } from './hooks'
import reducer from './reducers'

export default ({ data = [], editable, toolbar, exportable }) => {
  const uniqueKeys = useUniqueKeys(data.length)
  const initialState = { content: data, uniqueKeys }
  const [state, dispatch] = useReducer(reducer, initialState)
  const [header, ...rows] = [...state.content]

  return (
    <ModeContext.Provider value={{ isEditable: Boolean(editable) }}>
      <ContentContext.Provider value={[state, dispatch]}>
        <div>
          {toolbar && <Toolbar />}
          {exportable && <ExportButton data={state.content} />}
          <table>
            <thead>
              <Row header cells={header} />
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <Row
                  key={state.uniqueKeys[index + 1]}
                  rowIndex={index + 1}
                  cells={row}
                />
              ))}
            </tbody>
          </table>
        </div>
      </ContentContext.Provider>
    </ModeContext.Provider>
  )
}
