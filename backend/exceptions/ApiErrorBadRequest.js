import ApiErrorBase from './ApiErrorBase.js';

class ApiErrorBadRequest extends ApiErrorBase {
  constructor(id, message) {
    super(message);

    this.name = ApiErrorBadRequest.constructor.name;
    this.statusCode = 400;
    this.message = message;
  }
}

export default ApiErrorBadRequest;
