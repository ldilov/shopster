import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';

const ProductDetailsTable = ({data, isDisabled}) => {
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
            <Button className='btn-block btn-primary' type='button' disabled={isDisabled}>Add To Cart</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
  );
};

export default ProductDetailsTable;
