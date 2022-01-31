class ApiFetchError extends Error {
  constructor(innerErr, method, path) {
    super();

    this.message = `Error during performing API ${method.toString().toUpperCase()} /${path} request!`;
    this.name = ApiFetchError.constructor.name;
    this.innerError = innerErr;
  }
}

export default ApiFetchError;
