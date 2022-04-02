import mongoose from 'mongoose';

import Product from '../models/ProductModel.js';

import ApiErrorNotFound from '../../exceptions/ApiErrorNotFound.js';
import ApiErrorBadRequest from '../../exceptions/ApiErrorBadRequest.js';
import ApiErrorBase from '../../exceptions/ApiErrorBase.js';
import User from '../models/UserModel.js';
import ApiErrorUnauthorized from '../../exceptions/ApiErrorUnauthorized.js';

export const authenticateWithCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if(user && (await user.matchPassword(password))) {
    return user;
  } else {
    throw new ApiErrorUnauthorized(email, 'User was not found');
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
      message: {
        message: err.message
      },
      statusCode: err.statusCode
    }
  }
};
