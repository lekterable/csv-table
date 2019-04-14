import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from 'react-testing-library'
import Toolbar from '../../components/Toolbar'
import { ContentContext } from '../../contexts'

describe('<Toolbar />', () => {
  const withContext = (component, content) => (
    <ContentContext.Provider value={content}>
      {component}
    </ContentContext.Provider>
  )

  afterEach(cleanup)

  it('should match snapshot', () => {
    const component = renderer.create(<Toolbar />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('should add row', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId } = render(
      withContext(<Toolbar />, [{ content: [], uniqueKeys: [] }, dispatchSpy])
    )
    const addRow = getByTestId('row-add')
    const rowInput = getByTestId('row-input')
    fireEvent.change(rowInput, { target: { value: 5 } })
    fireEvent.click(addRow)

    expect(dispatchSpy).toBeCalled()
    expect(dispatchSpy).toBeCalledWith({ rowIndex: 5, type: 'ADD_ROW' })
  })

  it('should remove row', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId } = render(
      withContext(<Toolbar />, [{ content: [], uniqueKeys: [] }, dispatchSpy])
    )
    const removeRow = getByTestId('row-remove')
    const rowInput = getByTestId('row-input')
    fireEvent.change(rowInput, { target: { value: 3 } })
    fireEvent.click(removeRow)

    expect(dispatchSpy).toBeCalled()
    expect(dispatchSpy).toBeCalledWith({ rowIndex: 3, type: 'REMOVE_ROW' })
  })

  it('should add column', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId } = render(
      withContext(<Toolbar />, [{ content: [], uniqueKeys: [] }, dispatchSpy])
    )
    const addColumn = getByTestId('column-add')
    const columnInput = getByTestId('column-input')
    fireEvent.change(columnInput, { target: { value: 4 } })
    fireEvent.click(addColumn)

    expect(dispatchSpy).toBeCalled()
    expect(dispatchSpy).toBeCalledWith({ colIndex: 4, type: 'ADD_COLUMN' })
  })

  it('should remove column', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId } = render(
      withContext(<Toolbar />, [{ content: [], uniqueKeys: [] }, dispatchSpy])
    )
    const removeColumn = getByTestId('column-remove')
    const columnInput = getByTestId('column-input')
    fireEvent.change(columnInput, { target: { value: 2 } })
    fireEvent.click(removeColumn)

    expect(dispatchSpy).toBeCalled()
    expect(dispatchSpy).toBeCalledWith({ colIndex: 2, type: 'REMOVE_COLUMN' })
  })

  it('should set max values', () => {
    const dispatchSpy = jest.fn()
    const content = [
      ['Header 1', 'Header 2', 'Header 3'],
      ['Value 1', 'Value 2', 'Value 3'],
      ['Value 1', 'Value 2', 'Value 3'],
      ['Value 1', 'Value 2', 'Value 3']
    ]

    const { getByTestId } = render(
      withContext(<Toolbar />, [{ content, uniqueKeys: [] }, dispatchSpy])
    )

    const rowInput = getByTestId('row-input')
    const columnInput = getByTestId('column-input')

    expect(Number(rowInput.max)).toEqual(content.length)
    expect(Number(columnInput.max)).toEqual(content[0].length + 1)
  })
})
