import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const CountPerPageDropdown = ({
  countPerPage,
  countPerPageOptions,
  pageCountAction,
}) => {
  const handleClick = (countPerPageSelection) => {
    pageCountAction(countPerPageSelection)
  }

  return (
    <NavDropdown title={countPerPage} id='nav-dropdown'>
      {countPerPageOptions.map((count, index) => {
        return (
          <NavDropdown.Item
            name={count}
            eventKey={index}
            onClick={() => handleClick(count)}
          >
            {count}
          </NavDropdown.Item>
        )
      })}
    </NavDropdown>
  )
}

export default CountPerPageDropdown
