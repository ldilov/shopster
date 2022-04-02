import asyncHandler from 'express-async-handler';

import {
  authenticateWithCredentials,
  buildResponse,
  buildErrorResponse, getUserFromDbById
} from '../data/services/auth.service.js';

// @desc Login with credentials
// @route POST /api/auth/login
// @access Public
const postAuthCredentials = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await authenticateWithCredentials(email, password);
  const {statusCode, data} = buildResponse(user);

  res.status(statusCode).json(data)
});

// @desc Get authenticated user profile
// @route GET /api/auth/profile
// @access Private
const getAuthData = asyncHandler(async (req, res) => {

    const user = await getUserFromDbById(req?.user?._id);
    const {statusCode, data} = buildResponse(user);
    res.status(statusCode).json(data)

});

export {
  postAuthCredentials,
  getAuthData
};
