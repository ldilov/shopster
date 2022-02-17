import { CART_ACTION_TYPES, CART_INITIAL_STATE } from './cart.constants';
import { addItemToCart, decreaseItemQuantity } from './cart.utils';

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTION_TYPES.ADD_CART_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload)
      };
    case CART_ACTION_TYPES.DECREASE_CART_ITEM_QUANTITY:
      return {
        ...state,
        items: decreaseItemQuantity(state.items, action.payload)
      };
    case CART_ACTION_TYPES.CLEAR_CART_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id)
      };
    case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        items: []
      };
    default:
      return {...state};
  }
};
