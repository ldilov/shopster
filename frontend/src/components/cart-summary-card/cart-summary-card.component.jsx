/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { card, cartSummary, h4Title, title } from './cart-summary-card.styles';

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
                <Row className="py-4">
                  <Row>
                    <Col>
                      <h4 css={h4Title}>Coupons</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                          size="sm"
                          type="text"
                          placeholder="Coupon code"
                          id="couponCode"
                      />
                    </Col>
                  </Row>
                </Row>
                <Row className="py-4">
                  <Row>
                    <Col>
                      <h4 css={h4Title}>Shipping</h4>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Select
                          size="sm"
                          id="shipping"
                      >
                        <option>Choose shipping</option>
                        <option value="shippingDefault">Default shipping - $1</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Row>
              </Row>
              <hr/>
              <h4 css={h4Title}>TOTAL: ${ total }</h4>
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
