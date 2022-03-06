/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Col, Row } from 'react-bootstrap';
import { h4Title } from './cart-row-form.styles';

const CartRowForm = ({ title, children }) => {
  return (
      <Row className="py-4">
        <Row>
          <Col>
            <h4 css={h4Title}>{ title }</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Row>
  );
};

export default CartRowForm;
