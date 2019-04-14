import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, render } from 'react-testing-library'
import Row from '../../components/Row'

describe('<Row />', () => {
  const withTable = component => (
    <table>
      <tbody>{component}</tbody>
    </table>
  )

  afterEach(cleanup)

  it('should match snapshot', () => {
    const component = renderer.create(<Row />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('should render row', () => {
    const { queryByTestId } = render(withTable(<Row />))
    const headerRow = queryByTestId('table-header-row')
    const row = queryByTestId('table-row')

    expect(headerRow).toBeNull()
    expect(row).not.toBeNull()
  })

  it('should render header row if `header` prop', () => {
    const { queryByTestId } = render(withTable(<Row header />))
    const headerRow = queryByTestId('table-header-row')
    const row = queryByTestId('table-row')

    expect(headerRow).not.toBeNull()
    expect(row).toBeNull()
  })

  it('should not render <Cell /> without data', () => {
    const { queryByTestId } = render(withTable(<Row />))
    const cell = queryByTestId('table-cell')

    expect(cell).toBeNull()
  })

  it('should render <Cell /> with data', () => {
    const { queryByTestId } = render(
      withTable(<Row cells={['Value 1', 'Value 2']} />)
    )
    const cell = queryByTestId('table-cell')

    expect(cell).not.toBeNull()
  })
})
