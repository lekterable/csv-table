import reducer from '../../reducers'

describe('reducer', () => {
  it('should update content', () => {
    const state = {
      content: [['Header 1', 'Header 2'], ['Value 1', 'Value 2']],
      uniqueKeys: ['a', 'b']
    }
    const newState = reducer(state, {
      type: 'UPDATE_CONTENT',
      rowIndex: 1,
      colIndex: 1,
      content: 'Updated Value'
    })

    expect(newState).toEqual({
      content: [['Header 1', 'Header 2'], ['Value 1', 'Updated Value']],
      uniqueKeys: ['a', 'b']
    })
  })

  it('should add row', () => {
    const state = {
      content: [['Header 1', 'Header 2'], ['Value 1', 'Value 2']],
      uniqueKeys: ['a', 'b']
    }
    const newState = reducer(state, {
      type: 'ADD_ROW',
      rowIndex: 2
    })

    expect(newState.content).toEqual([
      ['Header 1', 'Header 2'],
      ['Value 1', 'Value 2'],
      ['', '']
    ])
    expect(newState.uniqueKeys.length).toBe(state.uniqueKeys.length + 1)
  })

  it('should remove row', () => {
    const state = {
      content: [['Header 1', 'Header 2'], ['Value 1', 'Value 2']],
      uniqueKeys: ['a', 'b']
    }
    const newState = reducer(state, {
      type: 'REMOVE_ROW',
      rowIndex: 1
    })

    expect(newState.content).toEqual([['Header 1', 'Header 2']])
    expect(newState.uniqueKeys.length).toBe(state.uniqueKeys.length - 1)
  })

  it('should add column', () => {
    const state = {
      content: [['Header 1', 'Header 2'], ['Value 1', 'Value 2']],
      uniqueKeys: ['a', 'b']
    }
    const newState = reducer(state, {
      type: 'ADD_COLUMN',
      colIndex: 2
    })

    expect(newState).toEqual({
      content: [['Header 1', '', 'Header 2'], ['Value 1', '', 'Value 2']],
      uniqueKeys: ['a', 'b']
    })
  })

  it('should remove column', () => {
    const state = {
      content: [['Header 1', 'Header 2'], ['Value 1', 'Value 2']],
      uniqueKeys: ['a', 'b']
    }
    const newState = reducer(state, {
      type: 'REMOVE_COLUMN',
      colIndex: 2
    })

    expect(newState).toEqual({
      content: [['Header 1'], ['Value 1']],
      uniqueKeys: ['a', 'b']
    })
  })

  it('should throw error if invalid action dispatched', () => {
    const invalidAction = {
      type: 'NOT_AN_ACTION'
    }

    expect(() => reducer({}, invalidAction)).toThrow()
  })
})
