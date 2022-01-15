/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { Container } from 'react-bootstrap';

import { mainContent } from './main.styles';

const Main = () => {
  return (
      <main css={mainContent}>
        <Container>
          <h1>Welcome to shopster</h1>
        </Container>
      </main>
  );
}

export default Main;
