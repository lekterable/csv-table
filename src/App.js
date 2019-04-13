import React, { Component } from 'react'
import Table from './table-csv'

class App extends Component {
  render() {
    const exampleData = [
      ['First Name', 'Last Name', 'House'],
      ['Harry', 'Potter', 'Gryffindor'],
      ['Hermiona', 'Granger', 'Gryffindor'],
      ['Luna', 'Lovegood', 'Ravenclaw'],
      ['Draco', 'Malfoy', 'Slytherin']
    ]

    return (
      <div>
        <h1>csv-table example</h1>
        <Table data={exampleData} editable toolbar exportable />
      </div>
    )
  }
}

export default App
