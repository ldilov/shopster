import { CART_ACTION_TYPES as ACTION_TYPES } from './cart.constants';

export const addCartItem = (item) => ({
  type: ACTION_TYPES.ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = (item) => ({
  type: ACTION_TYPES.CLEAR_CART_ITEM,
  payload: item
});

export const decreaseQuantity = (item) => ({
  type: ACTION_TYPES.DECREASE_CART_ITEM_QUANTITY,
  payload: item
});

export const increaseQuantity = (item) => ({
  type: ACTION_TYPES.INCREASE_CART_ITEM_QUANTITY,
  payload: item
});

export const clearCart = () => ({
  type: ACTION_TYPES.CLEAR_CART
});
