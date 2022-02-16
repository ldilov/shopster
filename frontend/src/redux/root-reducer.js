import { combineReducers } from 'redux';

import { productListReducer } from './product-list/product-list.reducer';
import { productReducer } from './product/product.reducer';

const rootReducer = combineReducers({
  productList: productListReducer,
  product: productReducer
});

export default rootReducer;
