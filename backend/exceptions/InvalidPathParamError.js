class InvalidPathParamError extends Error {
  constructor(id, message, statusCode) {
    super(message);

    this.name = InvalidPathParamError.constructor.name;
    this.pathParam = id;
    this.statusCode = statusCode;
    this.message = message;
  }
}

export default InvalidPathParamError;
