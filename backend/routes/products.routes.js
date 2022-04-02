import express from 'express';
import { getProducts, getProduct } from '../controllers/product.controller.js';
import ErrorHandler from '../middlewares/errorHandler.js';

const router = express.Router();

router.get('/', getProducts, ErrorHandler);
router.get('/:id', getProduct, ErrorHandler);

export default router;
