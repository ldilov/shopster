import ApiErrorBase from './ApiErrorBase.js';

class ApiErrorUnauthorized extends ApiErrorBase {
  constructor(email, message) {
    super(message);

    this.name = ApiErrorUnauthorized.constructor.name;
    this.email = email;
    this.statusCode = 401;
    this.message = message;
  }
}

export default ApiErrorUnauthorized;
