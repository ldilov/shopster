import ApiErrorBase from './ApiErrorBase.js';

class ApiErrorNotFound extends ApiErrorBase {
  constructor(id, message) {
    super(message);

    this.name = ApiErrorNotFound.constructor.name;
    this.id = id;
    this.statusCode = 404;
    this.message = message;
  }
}

export default ApiErrorNotFound;
