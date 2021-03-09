import React from 'react'
import { Nav } from 'react-bootstrap'
import CountPerPageDropdown from '../components/CountPerPageDropdown'
import StateCheckboxes from '../components/StateCheckboxes'

const TableNavigationBar = ({
  countPerPage,
  countPerPageOptions,
  pageCountAction,
  stateOptions,
  currentStates,
  statesChangeAction,
}) => {
  return (
    <Nav className='justify-content-end'>
      <CountPerPageDropdown
        countPerPage={countPerPage}
        countPerPageOptions={countPerPageOptions}
        pageCountAction={pageCountAction}
      />
      <StateCheckboxes
        stateOptions={stateOptions}
        currentStates={currentStates}
        statesChangeAction={statesChangeAction}
      />
    </Nav>
  )
}

export default TableNavigationBar
