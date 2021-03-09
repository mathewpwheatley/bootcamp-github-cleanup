import React from 'react'
import { Form } from 'react-bootstrap'

const CommonTableRow = ({ checked, datum, dataKeys, selectAction }) => {
  const mapColumns = () => {
    return dataKeys.map((dataKey, index) => (
      <td key={index}>{datum.node[dataKey]}</td>
    ))
  }

  return (
    <tr>
      <td>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check
            disabled={datum.node.state != 'OPEN'}
            type='checkbox'
            checked={checked}
            onClick={() => selectAction(datum.node.id)}
          />
        </Form.Group>
      </td>
      {mapColumns()}
    </tr>
  )
}

export default CommonTableRow
