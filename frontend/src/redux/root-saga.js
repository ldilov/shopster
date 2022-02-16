import { all, call } from 'redux-saga/effects';
import { productListSagas } from './product-list/product-list.sagas';
import { productSagas } from './product/product.sagas';

export default function* rootSaga() {
  yield all([
      call(productListSagas),
      call(productSagas)
  ]);
}
