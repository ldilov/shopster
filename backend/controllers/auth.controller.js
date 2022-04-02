import asyncHandler from 'express-async-handler';

import {
  authenticateWithCredentials,
  buildResponse,
  buildErrorResponse
} from '../data/services/auth.service.js';

// @desc Login with credentials
// @route POST /api/auth/login
// @access Public
const postAuthCredentials = asyncHandler(async (req, res) => {
  console.log(req)
  const { email, password } = req.body;
  try{
    const user = await authenticateWithCredentials(email, password);
    const {statusCode, data} = buildResponse(user);
    res.status(statusCode).json(data)
  } catch(err) {
    const {statusCode, message} = buildErrorResponse(err);
    res.status(statusCode).json(message);
  }
});

export {
  postAuthCredentials
};
