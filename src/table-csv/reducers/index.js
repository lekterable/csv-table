export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT': {
      const newState = [...state]
      newState[action.rowIndex][action.colIndex] = action.content
      return [...newState]
    }
    default:
      throw new Error('Invalid action')
  }
}
