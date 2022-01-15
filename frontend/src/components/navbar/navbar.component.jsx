/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import { navItem, navLinksRight } from './navbar.styles';

import { FaShoppingCart, FaUser } from 'react-icons/fa';

const NavigationBar = () => {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Shopster</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" css={ navLinksRight }>
            <Nav>
              <Nav.Link href="/cart">
                <div css={ navItem }>
                  <FaShoppingCart/> Cart
                </div>
              </Nav.Link>
              <Nav.Link href="/signin">
                <div css={ navItem }>
                  <FaUser/> Sign In
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavigationBar;
