/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { navItem } from './navbar-item.styles.jsx';

import { Nav } from 'react-bootstrap';

const NavbarItem = ({path, title, iconComponent}) => {
  const Icon = iconComponent;

  return (
      <Nav.Link href={`/${path}`}>
        <div css={ navItem }>
          <Icon /> {title}
        </div>
      </Nav.Link>
  );
}

export default NavbarItem;
