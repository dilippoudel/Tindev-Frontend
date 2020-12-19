<<<<<<< HEAD
import React from 'react'
//import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

//import { logout } from '../../redux/actions/userActions'
import './NavBar.scss'

const NavBar = () => {
  //const dispatch = useDispatch()
  const history = useHistory()
  // const login = useSelector((state) => state.logout)
  // const userInfo = login

  // this is hard coded data for testing title on the navbar
  const userInfo = { userName: 'Dilippo', id: 1}

  const handleLogout = () => {
    // dispatch(logout())
    history.push('/')
  }

  return (
    <Navbar expand="lg" collapseOnSelect className="navbar">
      <LinkContainer to='/'>
        <Navbar.Brand>TinDev</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {userInfo && 
          <LinkContainer to='/register'>
            <Nav.Link><i className="register"></i>Register</Nav.Link>
          </LinkContainer>}
          {userInfo ? (
          <NavDropdown title={userInfo.userName} id="username">
            <LinkContainer to='/profile'>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to={`/userpage/${userInfo.id}`}>
              <NavDropdown.Item>Home</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
          ) : ( <LinkContainer to='/login'>
            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
          </LinkContainer>)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
=======
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
	// useSelector to get user info
	// this is hard coded data for testing title on the navbar
	const userInfo1 = { companyName: 'Google' };
	const userInfo2 = { firstName: 'Dilippo' };

	const handleLogout = () => {
		console.log('logout');
	};

	return (
		<Navbar expand='lg' collapseOnSelect className='navbar'>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>TinDev</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto'>
						{userInfo1 ? (
							<NavDropdown title={userInfo1.companyName} id='company-name'>
								<LinkContainer to='/profileCompany'>
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item onClick={handleLogout}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i>Company Login
								</Nav.Link>
							</LinkContainer>
						)}
						{userInfo2 ? (
							<NavDropdown title={userInfo2.firstName} id='jobseeker-name'>
								<LinkContainer to='/profileJobSeeker'>
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>
								<NavDropdown.Item onClick={handleLogout}>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						) : (
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i>Jobseeker Login
								</Nav.Link>
							</LinkContainer>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
>>>>>>> bd0064ea14f22b81eacdbc1e7521d0508792aaae
