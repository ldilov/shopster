import express from 'express';
import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

import Product from '../data/models/ProductModel.js';

const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}));


// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(async (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)){
    res.status(400).json({
      message: 'Invalid product id!'
    });
  }

  const product = await Product.findById(req.params.id);

  if(product) {
    res.json(product);
  } else {
    res.status(404).json({
      message: 'Product not found'
    });
  }
}));

export default router;
