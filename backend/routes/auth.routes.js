import express from 'express';
import { postAuthCredentials } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', postAuthCredentials);

export default router;
