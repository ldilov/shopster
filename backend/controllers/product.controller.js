import asyncHandler from 'express-async-handler';

import {
  buildErrorResponse,
  buildResponse,
  getProductsFromDb,
  getSingleProductFromDb
} from '../data/services/products.service.js';

// @desc Fetch all product-list
// @route GET /api/product-list
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await getProductsFromDb();
  const {statusCode, data} = buildResponse(products);

  res.status(statusCode).json(data);
});

// @desc Fetch single product-list
// @route GET /api/product-list/:id
// @access Public
const getProduct = asyncHandler(async (req, res) => {
  try {
    const result = await getSingleProductFromDb(req.params.id);
    const {statusCode, data} = buildResponse(result);
    res.status(statusCode).json(data);
  } catch (err) {
    const {statusCode, message} = buildErrorResponse(err);
    res.status(statusCode).json(message);
  }
});

export {
  getProducts,
  getProduct
};
