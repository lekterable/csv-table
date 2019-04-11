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

storiesOf('Table', module).add('default', () => <Table data={exampleData} />)
