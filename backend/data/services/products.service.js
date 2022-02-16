import mongoose from 'mongoose';

import Product from '../models/ProductModel.js';

import ApiErrorNotFound from '../../exceptions/ApiErrorNotFound.js';
import ApiErrorBadRequest from '../../exceptions/ApiErrorBadRequest.js';
import ApiErrorBase from '../../exceptions/ApiErrorBase.js';

export const getSingleProductFromDb = async (id) => {
  if(!mongoose.Types.ObjectId.isValid(id)){
    throw new ApiErrorBadRequest(id, 'Invalid product id!')
  }

  const product = await Product.findById(id);

  if(product) {
    return product;
  } else {
    throw new ApiErrorNotFound(id, 'Product not found');
  }
};

export const getProductsFromDb = async () => {
  return Product.find({});
};

export const buildResponse = (result) => {
  return {
    data: result,
    statusCode: 200
  }
};

export const buildErrorResponse = (err) => {
  if(err instanceof ApiErrorBase){
    return {
      message: err.message,
      statusCode: err.statusCode
    }
  }
};
