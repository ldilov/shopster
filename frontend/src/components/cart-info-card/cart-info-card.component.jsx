/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Col, Row } from 'react-bootstrap';

import CartSummaryCard from '../cart-summary-card/cart-summary-card.component';
import CartShoppingCard from '../cart-shopping-card/cart-shopping-card.component';

import { cardFrameStyle } from './cart-info-card.styles';

const CartInfoCard = ({ cartItems, total, subTotal, count }) => {
  return (
      <div css={cardFrameStyle}>
        <Row>
          <Col md={ 8 }>
            <CartShoppingCard items={ cartItems }/>
          </Col>
          <Col md={ 4 }>
            <CartSummaryCard total={ total } subTotal={ subTotal } count={ count }/>
          </Col>
        </Row>
      </div>
  );
};

export default CartInfoCard;
