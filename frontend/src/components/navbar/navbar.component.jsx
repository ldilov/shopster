/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { navLinksRight } from './navbar.styles';

import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import NavbarItem from '../navbar-item/navbar-item.component';
import withBubble from '../hocs/navbar-bubble/withBubble';

const NavbarCartItem = withBubble(selectCartItemsCount)(NavbarItem);

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
              <NavbarCartItem path="cart" title="Cart" iconComponent={ () => <FaShoppingCart/> }/>
              <NavbarItem path="signin" title="Sign In" iconComponent={ () => <FaUser/> }/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavigationBar;
