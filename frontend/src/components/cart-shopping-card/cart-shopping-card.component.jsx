/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CartItemsList from '../cart-items-list/cart-items-list.component';
import { BsArrowLeftShort } from 'react-icons/bs';

import { backToShop, card, cardFrame, title } from './cart-shopping-card.styles';

const CartShoppingCard = ({ items, onDelete }) => {
  return (
      <Card border="light" css={{...card, ...cardFrame}}>
        <Card.Body css={card}>
          <h1 css={title}>Shopping Cart</h1>
          <hr />
          <CartItemsList items={items} />
          <div css={backToShop}>
            <Link to='/'>
              <BsArrowLeftShort />
              <span className="text-muted">Back to shop</span>
            </Link>
          </div>
        </Card.Body>
      </Card>
  );
}

export default CartShoppingCard;
