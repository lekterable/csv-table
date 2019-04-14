import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, render } from 'react-testing-library'
import EditableField from '../../components/EditableField'

describe('<EditableField />', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const component = renderer.create(<EditableField />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should render display', () => {
    const { queryByTestId } = render(<EditableField />)
    const field = queryByTestId('editable-field-display')
    const input = queryByTestId('editable-field-input')

    expect(input).toBe(null)
    expect(field).not.toBe(null)
  })

  it('should render input if `editMode` prop', () => {
    const { queryByTestId } = render(<EditableField editMode />)
    const field = queryByTestId('editable-field-display')
    const input = queryByTestId('editable-field-input')

    expect(field).toBe(null)
    expect(input).not.toBe(null)
  })

  it('should render correct value', () => {
    const { queryByTestId } = render(<EditableField value="Just a field" />)
    const field = queryByTestId('editable-field-display')

    expect(field.textContent).toBe('Just a field')
  })
})
