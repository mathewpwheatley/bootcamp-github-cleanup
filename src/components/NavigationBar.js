import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar className='shadow' bg='primary' variant='dark'>
      <Navbar.Collapse>
        <NavLink exact to='/' title='Bootcamp Github Cleanup'>
          <Navbar.Brand>
            <span className='d-none d-sm-none d-md-inline'>
              Bootcamp Github Cleanup: Pull Requests
            </span>
          </Navbar.Brand>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
