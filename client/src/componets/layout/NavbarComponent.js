import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
const NavbarComponent = () => {
	return (
		<Fragment>
			{' '}
			<>
				<Navbar bg='light' expand='lg'>
					<Navbar.Brand href='#home'>
						{' '}
						Teklehaymanotie Church{' '}
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link href='#home'>Pyament Status</Nav.Link>
							<Nav.Link href='#link'> Due Payments</Nav.Link>
							<Nav.Link href='#link'> Fundraise</Nav.Link>
							<Nav.Link href='#link'> Contact us</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</>
		</Fragment>
	);
};

export default NavbarComponent;
