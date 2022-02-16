import { takeLatest, call, all, put } from 'redux-saga/effects';

import { PRODUCT_ACTION_TYPES } from './product.constants';
import { fetchApiSingleProduct } from '../../data/api/fetch-products.api';
import { fetchProductFail, fetchProductSuccess } from './product.actions';

export function* fetchSingleProduct(action) {
  try {
    const data = yield call(fetchApiSingleProduct, action.id);
    yield put(fetchProductSuccess(data));
  } catch(err) {
    yield put(fetchProductFail(`${err.message}: ${err.innerError.message}`));
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(PRODUCT_ACTION_TYPES.FETCH_PRODUCT_START, fetchSingleProduct)
}

export function* productSagas() {
  yield all([
     call(onFetchProductsStart)
  ]);
}
