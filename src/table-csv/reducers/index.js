import uuid from 'uuid'
import {
  ADD_COLUMN,
  ADD_ROW,
  REMOVE_COLUMN,
  REMOVE_ROW,
  UPDATE_CONTENT
} from '../actions'

export default (state, action) => {
  switch (action.type) {
    case UPDATE_CONTENT: {
      const newContent = [...state.content]
      newContent[action.rowIndex][action.colIndex] = action.content
      return { ...state, content: newContent }
    }
    case ADD_ROW: {
      const newContent = [...state.content]
      const newUniqueKeys = [...state.uniqueKeys]
      const [header] = newContent
      newContent.splice(action.rowIndex, 0, new Array(header.length).fill(''))
      newUniqueKeys.splice(action.rowIndex, 0, uuid.v4())
      return { ...state, content: newContent, uniqueKeys: newUniqueKeys }
    }
    case REMOVE_ROW: {
      const newContent = state.content.filter(
        (_, index) => index !== action.rowIndex
      )
      const newUniqueKeys = state.uniqueKeys.filter(
        (_, index) => index !== action.rowIndex
      )
      return { ...state, content: newContent, uniqueKeys: newUniqueKeys }
    }
    case ADD_COLUMN: {
      const newContent = state.content.map(row => {
        const newRow = [...row]
        newRow.splice(action.colIndex - 1, 0, '')
        return newRow
      })
      return { ...state, content: newContent }
    }
    case REMOVE_COLUMN: {
      const newContent = state.content.map(row =>
        row.filter((_, index) => index !== action.colIndex - 1)
      )
      return { ...state, content: newContent }
    }
    default:
      throw new Error('Invalid action')
  }
}
