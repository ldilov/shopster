import { combineReducers } from 'redux';

import { productListReducer } from './product-list/product-list.reducer';

const rootReducer = combineReducers({
  productList: productListReducer
});

export default rootReducer;
