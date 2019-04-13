import { storiesOf } from '@storybook/react'
import React from 'react'
import Table from '../src/table-csv'

const exampleData = [
  ['First Name', 'Last Name', 'House'],
  ['Harry', 'Potter', 'Gryffindor'],
  ['Hermiona', 'Granger', 'Gryffindor'],
  ['Luna', 'Lovegood', 'Ravenclaw'],
  ['Draco', 'Malfoy', 'Slytherin']
]

storiesOf('Table', module)
  .add('default', () => <Table data={exampleData} />)
  .add('editable', () => <Table data={exampleData} editable />)
  .add('with toolbar', () => <Table data={exampleData} toolbar />)
  .add('exportable', () => <Table data={exampleData} exportable />)
