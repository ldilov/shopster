import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import sessionStorage from 'redux-persist/lib/storage/session';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import { productListReducer } from './product-list/product-list.reducer';
import { productReducer } from './product/product.reducer';
import { cartReducer } from './cart/cart.reducer';
import { persistCartConfig } from './cart/cart.constants';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  productList: productListReducer,
  product: productReducer,
  cart: persistReducer(persistCartConfig, cartReducer)
});

export default persistReducer(persistConfig, rootReducer);
