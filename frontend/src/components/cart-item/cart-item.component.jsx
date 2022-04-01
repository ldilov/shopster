import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight, FaTrash } from 'react-icons/fa';

import ColumnCentered from '../layout/column-centered.component';

const CartItem = ({ item, onDelete, onIncreaseQty, onDecreaseQty }) => {
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
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <FaAngleLeft onClick={() => onDecreaseQty(item)} role='button' />
              <Form.Control
                  className="p-1"
                  type="text"
                  id="productQuantity"
                  value={ item.quantity }
              />
              <FaAngleRight onClick={() => onIncreaseQty(item)} role='button' />
            </div>

          </ColumnCentered>
          <ColumnCentered md={1}>
            <Button type="button" variant="light" onClick={ () => onDelete(item) }>
              <FaTrash color='red'/>
            </Button>
          </ColumnCentered>
        </Row>
      </ListGroup.Item>
  );
};

export default CartItem;
