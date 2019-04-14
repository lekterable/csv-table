import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from 'react-testing-library'
import Cell from '../../components/Cell'
import { ContentContext, ModeContext } from '../../contexts'

describe('<Cell />', () => {
  const withTable = component => (
    <table>
      <tbody>
        <tr>{component}</tr>
      </tbody>
    </table>
  )
  const withContext = (component, mode, content) => (
    <ModeContext.Provider value={mode}>
      <ContentContext.Provider value={content}>
        {component}
      </ContentContext.Provider>
    </ModeContext.Provider>
  )

  afterEach(cleanup)

  it('should match snapshot', () => {
    const component = renderer.create(<Cell />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should render cell', () => {
    const { queryByTestId } = render(withTable(<Cell />))
    const headerCell = queryByTestId('table-header-cell')
    const cell = queryByTestId('table-cell')

    expect(headerCell).toBeNull()
    expect(cell).not.toBeNull()
  })

  it('should render header cell if `header` prop', () => {
    const { queryByTestId } = render(withTable(<Cell header />))
    const headerCell = queryByTestId('table-header-cell')
    const cell = queryByTestId('table-cell')

    expect(headerCell).not.toBeNull()
    expect(cell).toBeNull()
  })

  it('should not render input if not editable', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId, queryByTestId } = render(
      withContext(
        withTable(<Cell value="Just a Cell" colIndex={2} rowIndex={3} />),
        { isEditable: false },
        [{ content: [], uniqueKeys: [] }, dispatchSpy]
      )
    )

    fireEvent.click(getByTestId('editable-field-display'))
    const input = queryByTestId('editable-field-input')

    expect(input).toBeNull()
  })

  it('should update the global content on submit', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId } = render(
      withContext(
        withTable(<Cell value="Just a Cell" colIndex={2} rowIndex={3} />),
        { isEditable: true },
        [{ content: [], uniqueKeys: [] }, dispatchSpy]
      )
    )

    fireEvent.click(getByTestId('editable-field-display'))
    const input = getByTestId('editable-field-input')
    fireEvent.change(input, { target: { value: "I'm a updated Cell" } })
    fireEvent.keyDown(input, { key: 'Enter' })
    const display = getByTestId('editable-field-display')

    expect(display.textContent).toBe("I'm a updated Cell")
    expect(dispatchSpy).toBeCalled()
    expect(dispatchSpy).toBeCalledWith({
      colIndex: 2,
      content: "I'm a updated Cell",
      rowIndex: 3,
      type: 'UPDATE_CONTENT'
    })
  })

  it('should discard the changes on escape', () => {
    const dispatchSpy = jest.fn()

    const { getByTestId } = render(
      withContext(
        withTable(<Cell value="Just a Cell" colIndex={2} rowIndex={3} />),
        { isEditable: true },
        [{ content: [], uniqueKeys: [] }, dispatchSpy]
      )
    )

    fireEvent.click(getByTestId('editable-field-display'))
    const input = getByTestId('editable-field-input')
    fireEvent.change(input, { target: { value: "I'm a updated Cell" } })
    fireEvent.keyDown(input, { key: 'Space' })
    fireEvent.keyDown(input, { key: 'Escape' })
    const display = getByTestId('editable-field-display')

    expect(display.textContent).toBe('Just a Cell')
    expect(dispatchSpy).not.toBeCalled()
  })
})
