import { createSelector } from 'reselect';

const selectProductList = (state) => state.productList;

export const selectProductListItems = createSelector([selectProductList], (list) => list.products);
export const selectProductListError = createSelector([selectProductList], (list) => list.error);
export const selectProductListIsLoading = createSelector([selectProductList], (list) => list.loading);
