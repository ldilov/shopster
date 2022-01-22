import mongoose from 'mongoose';

import InvalidPathParamError from '../exceptions/InvalidPathParamError.js';

const PATH_PARAM_REGEX = /^\/api\/(?<controller>\w+)\/(?<pathParam>\w+)$/;


function PathParamValidator(req, res, next) {
  const match = req.url.match(PATH_PARAM_REGEX);
  if (match) {
    const {controller, pathParam} = match.groups;
    if(!mongoose.Types.ObjectId.isValid(pathParam)){
      throw new InvalidPathParamError(pathParam, `Invalid id for ${ controller }!`, 400)
    }
  }

  next();
}

export default PathParamValidator;
