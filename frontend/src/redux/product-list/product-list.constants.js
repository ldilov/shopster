export const PRODUCTS_LIST_INITIAL_STATE = {
  products: [],
  loading: false,
  error: null
};

export const PRODUCTS_LIST_ACTION_TYPES = {
  FETCH_PRODUCTS_START: "FETCH_PRODUCTS_START",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_FAIL: "FETCH_PRODUCTS_FAIL",
};
