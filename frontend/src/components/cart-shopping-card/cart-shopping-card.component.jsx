import { Card } from 'react-bootstrap';

import CartItemsList from '../cart-items-list/cart-items-list.component';

const CartShoppingCard = ({ items }) => {
  return (
      <Card border="light" body>
        <h1>Shopping Cart</h1>
        <hr />
        <CartItemsList items={items} />
      </Card>
  );
}

export default CartShoppingCard;
