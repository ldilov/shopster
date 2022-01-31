import { PRODUCTS_LIST_ACTION_TYPES, PRODUCTS_LIST_INITIAL_STATE } from './product-list.constants';

export const productListReducer = (state = PRODUCTS_LIST_INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
        error: null,
        products: []
      };
    case PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload
      };
    case PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return {...state};
  }
};
