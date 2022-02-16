import { PRODUCT_ACTION_TYPES, PRODUCT_INITIAL_STATE } from './product.constants';

export const productReducer = (state = PRODUCT_INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START:
      return {
        ...state,
        loading: true,
        error: null,
        products: null
      };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload
      };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return {...state};
  }
};
