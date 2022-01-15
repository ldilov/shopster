/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { navItem } from './navbar-item.styles.jsx';

import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

const NavbarItem = ({path, title, iconComponent}) => {
  const Icon = iconComponent;

  return (
      <LinkContainer to={ `/${ path }` }>
        <Nav.Link>
          <div css={ navItem }>
            <Icon/> { title }
          </div>
        </Nav.Link>
      </LinkContainer>
  );
};

export default NavbarItem;
