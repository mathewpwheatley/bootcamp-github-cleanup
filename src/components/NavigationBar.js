import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar className='shadow' bg='primary' variant='dark'>
      <Navbar.Collapse>
        <Navbar.Brand>
          <span className='d-none d-sm-none d-md-inline'>
            Bootcamp Github Cleanup: Pull Requests
          </span>
        </Navbar.Brand>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
