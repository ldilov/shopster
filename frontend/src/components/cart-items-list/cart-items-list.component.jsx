import { ListGroup } from 'react-bootstrap';
import CartItem from '../cart-item/cart-item.component';

const CartItemsList = ({ items }) => {
  return (
      <ListGroup as="ol" numbered>
        {
          items.map(item => ( <CartItem item={item} key={item.product} /> ))
        }
      </ListGroup>
  );
};

export default CartItemsList;
