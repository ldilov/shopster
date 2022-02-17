import { createSelector } from 'reselect';
import { DEFAULT_ITEMS_COUNT, DEFAULT_ITEMS_TOTAL_PRICE } from './cart.constants';

const selectCartState = (state) => state.cart;

export const selectCartItems = createSelector([selectCartState], (cart) => cart.items);

export const selectCartItemsCount = createSelector([selectCartItems], (items) => {
  return items.length > 0 ? items.reduce((accum, cartItem) => accum + cartItem.quantity, DEFAULT_ITEMS_COUNT) : DEFAULT_ITEMS_COUNT;
});

export const selectCartTotalPrice = createSelector([selectCartItems], (items) => {
  return items.length > 0 ? items.reduce((accum, value) => accum + value.quantity * value.price, 0) : DEFAULT_ITEMS_TOTAL_PRICE;
});
