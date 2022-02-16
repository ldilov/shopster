import { PRODUCT_ACTION_TYPES } from './product.constants';

export const fetchProductStart = (payload) => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START,
  id: payload
});

export const fetchProductFail = (err) => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAIL,
  payload: err
});

export const fetchProductSuccess = (data) => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS,
  payload: data
});
