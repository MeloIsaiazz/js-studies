exports.middlewareGlobal = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res) => {
  if (err && err.code === "EBADCSRFTOKEN") {
    return res.render("404"); 
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = null;
  next()
};
