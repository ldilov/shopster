import { takeLatest, call, all, put } from 'redux-saga/effects';

import { PRODUCTS_LIST_ACTION_TYPES } from './product-list.constants';
import { fetchApiProducts } from '../../data/api/fetch-products.api';
import { fetchProductsFail, fetchProductsSuccess } from './product-list.actions';

export function* fetchProducts() {
  try {
    const products = yield call(fetchApiProducts);
    yield put(fetchProductsSuccess(products));
  } catch (err) {
    yield put(fetchProductsFail(`${err.message}`));
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(PRODUCTS_LIST_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProducts);
}

export function* productListSagas() {
  yield all([
      call(onFetchProductsStart)
  ])
}
