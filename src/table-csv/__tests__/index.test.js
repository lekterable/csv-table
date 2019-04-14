import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, render } from 'react-testing-library'
import Table from '../'

describe('table-csv', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const component = renderer.create(<Table />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('should match snapshot with data', () => {
    const component = renderer
      .create(
        <Table data={[['Header 1', 'Header 2'], ['Value 1', 'Value 2']]} />
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })

  it('should not render <Row /> without data', () => {
    const { queryAllByTestId } = render(<Table />)
    const header = queryAllByTestId('table-row')
    const rows = queryAllByTestId('table-row')

    expect(header.length).toBe(0)
    expect(rows.length).toBe(0)
  })

  it('should render <Row /> with data', () => {
    const { queryAllByTestId } = render(
      <Table data={[['Header 1', 'Header 2'], ['Value 1', 'Value 2']]} />
    )
    const header = queryAllByTestId('table-header-row')
    const rows = queryAllByTestId('table-row')

    expect(header.length).toBe(1)
    expect(rows.length).toBe(1)
  })

  it('should not render <Toolbar />', () => {
    const { queryByTestId } = render(<Table />)
    const toolbar = queryByTestId('toolbar')

    expect(toolbar).toBe(null)
  })

  it('should render <Toolbar /> if `toolbar` prop', () => {
    const { queryByTestId } = render(<Table toolbar />)
    const toolbar = queryByTestId('toolbar')

    expect(toolbar).not.toBe(null)
  })

  it('should not render <ExportButton />', () => {
    const { queryByTestId } = render(<Table />)
    const exportButton = queryByTestId('export-button')

    expect(exportButton).toBe(null)
  })

  it('should render <ExportButton /> if `exportable` prop', () => {
    const { queryByTestId } = render(<Table exportable />)
    const exportButton = queryByTestId('export-button')

    expect(exportButton).not.toBe(null)
  })
})
