import { createSelector } from 'reselect';

const selectProductState = (state) => state.product;

export const selectProductError = createSelector([selectProductState], (state) => state.error);
export const selectProductLoading = createSelector([selectProductState], (state) => state.loading);
export const selectProductData = createSelector([selectProductState], (state) => state.product);
