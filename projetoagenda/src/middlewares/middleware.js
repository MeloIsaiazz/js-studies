exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  console.log("Passei pelo middleware global")
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  console.log('--------------------------')
  console.log("Verifiquei um erro:", err.code);
  console.log(err.message)
  console.log('--------------------------')
  if (err) {
    return res.render("404");
  }

  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  console.log("defino o csrf:", res.locals.csrfToken)
  next();
};