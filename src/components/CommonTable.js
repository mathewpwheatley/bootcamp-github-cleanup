import React from 'react'
import { Button, Table } from 'react-bootstrap'
import CommonTableRow from './CommonTableRow'

const CommonTable = ({
  variant,
  data,
  selectedIds,
  selectAction,
  selectAllAction,
}) => {
  let attributes
  const setAttributes = () => {
    switch (variant) {
      case 'pullRequests':
        attributes = {
          displayKeys: {
            id: 'ID',
            title: 'Title',
            createdAt: 'Created At',
            updatedAt: 'Updated At',
            state: 'State',
          },
        }
        break
      case 'repositories':
        attributes = {
          displayKeys: {
            id: 'ID',
            classNames: 'Name',
          },
        }
        break
      default:
        break
    }
  }

  const mapHeadings = () => {
    return Object.keys(attributes.displayKeys).map((displayKey, index) => {
      return <th key={index}>{attributes.displayKeys[displayKey]}</th>
    })
  }

  const mapData = () => {
    return data.map((datum) => (
      <CommonTableRow
        key={datum.id}
        datum={datum}
        dataKeys={Object.keys(attributes.displayKeys)}
        checked={selectedIds.includes(datum.node.id)}
        selectAction={selectAction}
      />
    ))
  }

  return (
    <Table className='text-center' size='sm' hover>
      {setAttributes()}
      <thead className='thead-light'>
        <tr>
          <th>
            <Button onClick={selectAllAction}>
              {selectedIds.length === 0 ? 'Select All' : 'Clear'}
            </Button>
          </th>
          {mapHeadings()}
        </tr>
      </thead>
      <tbody>{mapData()}</tbody>
    </Table>
  )
}

export default CommonTable
