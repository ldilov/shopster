/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { card, cartSummary, title } from './cart-summary-card.styles';
import CartRowForm from '../layout/cart-row-form/cart-row-form.component';
import CartTitle from '../layout/cart-title/cart-title.component';

const CartSummaryCard = ({total, count, subTotal}) => {
  return (
      <div className="d-flex" css={ cartSummary }>
        <Card css={ card }>
          <Card.Body css={ card }>
            <h1 css={title}>Summary</h1>
            <hr/>
            <Row className="d-flex flex-grow-1">
              <Row className="d-flex justify-content-between align-items-stretch">
                <Row className="py-2">
                  <Col>
                    <span>ITEMS: { count }</span>
                  </Col>
                  <Col>
                    <span>SUBTOTAL: ${ subTotal }</span>
                  </Col>
                </Row>
                <CartRowForm title="Coupons">
                  <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Coupon code"
                      id="couponCode"
                  />
                </CartRowForm>
                <CartRowForm title="Shipping">
                  <Form.Select
                      size="sm"
                      id="shipping"
                  >
                    <option>Choose shipping</option>
                    <option value="shippingDefault">Default shipping - $1</option>
                  </Form.Select>
                </CartRowForm>
              </Row>
              <hr/>
              <CartTitle>TOTAL: ${ total }</CartTitle>
              <Button
                  className='btn-block btn-primary'
                  type='button'
              >Checkout</Button>
            </Row>
          </Card.Body>
        </Card>
      </div>
  );
};

export default CartSummaryCard;
