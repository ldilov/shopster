class ApiFetchError extends Error {
  constructor(message, method, path) {
    super();

    this.message = `Error during performing ${method.toString().toUpperCase()} /${path} request! ${message}`;
    this.name = ApiFetchError.constructor.name;
  }
}

export default ApiFetchError;
