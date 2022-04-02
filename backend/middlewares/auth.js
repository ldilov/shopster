import jwt from 'jsonwebtoken';
import UserDTO from '../data/dto/User.dto.js';
import ApiErrorBase from '../exceptions/ApiErrorBase.js';
import User from '../data/models/UserModel.js';

async function Auth(req, res, next) {
  try {
    req.user  = await extractDataFromHeader(req.headers.authorization)
        ?? await extractDataFromQuery(req.query?.token);
    next();
  } catch (err) {
    err.statusCode = 401;
    next(err);
  }
}

async function extractDataFromHeader(header) {
  if (header && header.startsWith('Bearer')) {
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return new UserDTO(await User.findById(decoded.id), token);
  }

  throw new ApiErrorBase("User not found!")
}

async function extractDataFromQuery(param) {
  if (param) {
    const decoded = jwt.verify(param, process.env.JWT_SECRET);
    return new UserDTO(await User.findById(decoded.id), param);
  }

  throw new ApiErrorBase("User not found!")
}

export default Auth;
