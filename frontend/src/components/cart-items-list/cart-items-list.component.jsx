import React from 'react';

import { ListGroup } from 'react-bootstrap';
import CartItem from '../cart-item/cart-item.component';

import { CartActionsContext } from '../../contexts/cart-actions.context';

const CartItemsList = ({ items }) => {
  const actions = React.useContext(CartActionsContext)

  return (
      <ListGroup as="ol" numbered>
        {
          items.map(item => (
              <CartItem
                  item={item}
                  key={item._id}
                  onDelete={actions.deleteItem}
                  onIncreaseQty={actions.increaseQty}
                  onDecreaseQty={actions.decreaseQty}
                  onSetQty={actions.setQty}
              />
          ))
        }
      </ListGroup>
  );
};

export default CartItemsList;
