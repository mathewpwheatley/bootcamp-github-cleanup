import React from 'react'
import { Form } from 'react-bootstrap'

const CommonTableRow = ({ checked, datum, dataKeys, selectAction }) => {
  const mapColumns = () => {
    return dataKeys.map((dataKey, index) => {
      if (dataKey === 'permalink') {
        return (
          <td key={index}>
            <a href={datum[dataKey]}>View on Github</a>
          </td>
        )
      } else if (dataKey === 'repository') {
        return <td key={index}>{datum[dataKey].name}</td>
      } else {
        return <td key={index}>{datum[dataKey]}</td>
      }
    })
  }

  return (
    <tr>
      <td>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            disabled={datum.state !== 'OPEN'}
            type='checkbox'
            checked={checked}
            onClick={() => selectAction(datum.id)}
          />
        </Form.Group>
      </td>
      {mapColumns()}
    </tr>
  )
}

export default CommonTableRow
