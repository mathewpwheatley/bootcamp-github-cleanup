import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Dropdown, Badge } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <Navbar className='shadow' bg='primary' variant='dark'>
      <Navbar.Collapse>
        <NavLink exact to='/' title='Bootcamp Github Cleanup'>
          <Navbar.Brand>
            <span className='d-none d-sm-none d-md-inline'>
              Bootcamp Github Cleanup
            </span>
          </Navbar.Brand>
        </NavLink>
        <Nav className='mr-auto'>
          <Nav.Item>
            <NavLink
              className='nav-link'
              to='/repositories'
              title='Repositories'
            >
              <span className='d-none d-sm-none d-md-inline'>Repositories</span>
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className='nav-link'
              to='/pull_requests'
              title='Pull Requests'
            >
              <span className='d-none d-sm-none d-md-inline'>
                Pull Requests
              </span>
            </NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
