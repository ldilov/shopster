import { all, call } from 'redux-saga/effects';
import { productListSagas } from './product-list/product-list.sagas';

export default function* rootSaga() {
  yield all([
      call(productListSagas)
  ]);
}
