/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Container } from 'react-bootstrap';

import { mainContent } from './main.styles';

const Main = ({children}) => {
  return (
      <main css={ mainContent }>
        <Container>
          { children }
        </Container>
      </main>
  );
};

export default Main;
