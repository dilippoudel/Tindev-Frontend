import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

import './NavBar.scss'

const NavBar = () => {
  const history = useHistory()
  // useSelector to get user info
  // this is hard coded data for testing title on the navbar
  const userInfo = { userName: 'Dilippo' }

  const handleLogout = () => {
    // dispatch logout
    history.push('/')
  }

  return (
    <Navbar expand="lg" collapseOnSelect className="navbar">
      <LinkContainer to="/">
        <Navbar.Brand>TinDev</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {!userInfo && (
            <LinkContainer to="/register">
              <Nav.Link>
                <i className="register"></i>Register
              </Nav.Link>
            </LinkContainer>
          )}
          {userInfo ? (
            <NavDropdown title={userInfo.userName} id="username">
              <LinkContainer to="/profileJobSeeker">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
