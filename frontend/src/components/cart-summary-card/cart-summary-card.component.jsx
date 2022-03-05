import { Card, Col, Form, Row } from 'react-bootstrap';

const CartSummaryCard = ({ total, count, subTotal  }) => {
  return (
      <Card border="light" bg="dark" body text="white">
        <h1>Summary</h1>
        <hr />
        <Row fluid>
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
                <h4>Coupons</h4>
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
                <h4>Shipping</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Select
                    size="sm"
                    id="shipping"
                >
                  <option>Choose shipping</option>
                  <option value='shippingDefault'>Default shipping - $1</option>
                </Form.Select>
              </Col>
            </Row>
          </Row>
        </Row>
        <hr />
        <h4>TOTAL: ${ total }</h4>
      </Card>
  );
}

export default CartSummaryCard;
