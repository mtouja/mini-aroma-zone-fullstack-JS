import React, { Component } from 'react';
import { Col, Row, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      toggle:false
    };
  }

  render() {
    return (
      <Row>
        <Col md={12} className='mt-3'>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">
              <img width='600px' className='mt-3'src={process.env.PUBLIC_URL + '/assets/images/logo-aroma-zone.svg'} alt='logo' />
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/account/create">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/account/login">Login</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        </Col>
      </Row>
    )
  }
}

export default Menu;
