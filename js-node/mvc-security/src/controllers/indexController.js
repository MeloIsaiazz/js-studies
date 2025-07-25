// Controllers
exports.index = (req, res, next) => {
  res.render("index", {
    titulo: res.locals.csrfToken,
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return;
};

exports.debugLocalVar = (req, res, next) => {
  res.send(res.locals);
  return;
};