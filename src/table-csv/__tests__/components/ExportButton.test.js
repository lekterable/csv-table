import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, render } from 'react-testing-library'
import ExportButton from '../../components/ExportButton'

describe('<ExportButton />', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const component = renderer.create(<ExportButton />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should render export button', () => {
    const { queryByTestId } = render(<ExportButton />)
    const exportButton = queryByTestId('export-button')

    expect(exportButton).not.toBeNull()
  })
})
