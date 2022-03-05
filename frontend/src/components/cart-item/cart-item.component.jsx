import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import ColumnCentered from '../layout/column-centered.component';

const CartItem = ({ item }) => {
  return (
      <ListGroup.Item>
        <Row>
          <Col md={ 2 }>
            <Image src={ item.image } alt={ item.name } fluid rounded/>
          </Col>
          <ColumnCentered md={4}>
            <Link to={ `/product/${ item.product }` }>{ item.name }</Link>
          </ColumnCentered>
          <ColumnCentered md={3}>
            ${ item.price }
          </ColumnCentered>
          <ColumnCentered md={1}>
            <Form.Control
                className="p-1"
                type="text"
                id="productQuantity"
                defaultValue={ item.quantity }
            />
          </ColumnCentered>
          <ColumnCentered md={1}>
            <Button type="button" variant="light" onClick={ () => true }>
              <FaTrash color='red'/>
            </Button>
          </ColumnCentered>
        </Row>
      </ListGroup.Item>
  );
};

export default CartItem;
