exports.middlewareGlobal = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === "EBADCSRF") {
    res.render("404");
  }
};

exports.csrfMiddleware = (req, res, next) => {
  var token = req.csrfToken();
  res.locals.csrfToken = token;
  next();
};
