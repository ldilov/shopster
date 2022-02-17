import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { addCartItem } from '../../redux/cart/cart.actions';

const ProductDetailsTable = ({data, isInStock, product, addCartItem}) => {
  const addToCartHandler = () => {
    addCartItem(product);
  };

  return (
      <Card>
        <ListGroup variant='flush'>
          {data.map(row => (
            <ListGroup.Item key={row[0]}>
              <Row>
                <Col>
                  {row[0]}:
                </Col>
                <Col>
                  <strong>{row[1]}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <Button
                className='btn-block btn-primary'
                type='button'
                onClick={addToCartHandler}
                disabled={isInStock}
            >Add To Cart</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (product) => dispatch(addCartItem(product))
});

export default connect(null, mapDispatchToProps)(ProductDetailsTable);
