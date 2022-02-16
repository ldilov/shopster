import express from 'express';
import asyncHandler from 'express-async-handler';

import {
  buildErrorResponse,
  buildResponse,
  getProductsFromDb,
  getSingleProductFromDb
} from '../data/services/products.service.js';;

const router = express.Router();

// @desc Fetch all product-list
// @route GET /api/product-list
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const products = await getProductsFromDb();
  const { statusCode, data} = buildResponse(products);

  res.status(statusCode).json(data);
}));


// @desc Fetch single product-list
// @route GET /api/product-list/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  try {
    const result = await getSingleProductFromDb(req.params.id);
    const { statusCode, data} = buildResponse(result);
    res.status(statusCode).json(data);
  } catch (err) {
    const { statusCode, message } = buildErrorResponse(err);
    res.status(statusCode).json(message);
  }
}));

export default router;
