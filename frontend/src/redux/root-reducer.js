import { combineReducers } from 'redux';

import { productListReducer } from './product-list/product-list.reducer';
import { productReducer } from './product/product.reducer';
import { cartReducer } from './cart/cart.reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
