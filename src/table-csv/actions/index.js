export const UPDATE_CONTENT = 'UPDATE_CONTENT'
export const ADD_ROW = 'ADD_ROW'
export const REMOVE_ROW = 'REMOVE_ROW'
export const ADD_COLUMN = 'ADD_COLUMN'
export const REMOVE_COLUMN = 'REMOVE_COLUMN'

export const updateContent = (content, rowIndex, colIndex) => ({
  type: UPDATE_CONTENT,
  content,
  rowIndex,
  colIndex
})
export const addRow = rowIndex => ({ type: ADD_ROW, rowIndex })
export const removeRow = rowIndex => ({ type: REMOVE_ROW, rowIndex })
export const addColumn = colIndex => ({ type: ADD_COLUMN, colIndex })
export const removeColumn = colIndex => ({ type: REMOVE_COLUMN, colIndex })
