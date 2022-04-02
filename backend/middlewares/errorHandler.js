function ErrorHandler(err, req, res, next) {
  const statusCode = err?.statusCode ?? 500;

  res.err = err;
  res.status(statusCode);
  res.json({
    paramValue: err.pathParam,
    message: err.message,
    statusCode: statusCode
  });
}

export default ErrorHandler;
