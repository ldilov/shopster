import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import sessionStorage from 'redux-persist/lib/storage/session';

export const DEFAULT_ITEMS_COUNT = 0;
export const DEFAULT_ITEMS_TOTAL_PRICE = 0;

export const CART_INITIAL_STATE = {
  items: [],
};

export const CART_ACTION_TYPES = {
  ADD_CART_ITEM: 'ADD_CART_ITEM',
  DECREASE_CART_ITEM_QUANTITY: 'DECREASE_CART_ITEM_QUANTITY',
  INCREASE_CART_ITEM_QUANTITY: 'INCREASE_CART_ITEM_QUANTITY',
  CLEAR_CART_ITEM: 'CLEAR_CART_ITEM',
  CLEAR_CART: 'CLEAR_CART'
};

export const persistCartConfig = {
  key: 'cart',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
}
