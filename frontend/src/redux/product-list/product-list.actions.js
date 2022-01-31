import { PRODUCTS_LIST_ACTION_TYPES } from './product-list.constants';

export const fetchProductsStart = () => ({
  type: PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_START
});

export const fetchProductsSuccess = (data) => ({
  type: PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  payload: data
});

export const fetchProductsFail = (err) => ({
  type: PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_FAIL,
  payload: err
});
