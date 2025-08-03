exports.index = (req, res) => {
  res.render('login');
};

exports.login = (req, res) => {
  console.log(req.body)
  res.send(req.body);
};

exports.register = (req, res) => {
  res.send(req.body);
};

