exports.formDeUsuario = (req, res) => {
  // Flash message -> Some depois que é acessada pela primeira vez
  // req.flash("chave", "mensagem");
  // console.log(req.flash("success"));

  // Session -> Persiste no browser do usuário, útil para login e dados de sessão
  // req.session.chae = valor

  res.render("index");
};

exports.showUserSession = (req, res) => {
  res.send(req.session.cliente);
};

exports.handleUserSubmit = (req, res) => {
  req.session.cliente = req.body.cliente;
  res.send(`Session definida para ${req.session.cliente}`);
};
