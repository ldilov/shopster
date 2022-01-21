/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { navLinksRight } from './navbar.styles';

import { FaShoppingCart, FaUser } from 'react-icons/fa';
import NavbarItem from '../navbar-item/navbar-item.component';

const NavigationBar = () => {
  return (
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Shopster</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" css={ navLinksRight }>
            <Nav>
              <NavbarItem path="cart" title="Cart" iconComponent={ () => <FaShoppingCart/> }/>
              <NavbarItem path="signin" title="Sign In" iconComponent={ () => <FaUser/> }/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavigationBar;
