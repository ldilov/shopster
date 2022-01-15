/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Container } from 'react-bootstrap';

import { mainContent } from './main.styles';

const Main = ({children}) => {
  return (
      <main css={ mainContent }>
        <Container>
          <h1>Welcome to shopster</h1>
          { children }
        </Container>
      </main>
  );
};

export default Main;
