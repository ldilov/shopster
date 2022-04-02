import express from 'express';
import { getAuthData, postAuthCredentials } from '../controllers/auth.controller.js';
import Auth from '../middlewares/auth.js';
import ErrorHandler from '../middlewares/errorHandler.js';

const router = express.Router();

router.post('/login', postAuthCredentials, ErrorHandler,);
router.get('/profile', Auth, getAuthData, ErrorHandler);

export default router;
