exports.formContato = (req, res) => {
  res.send(
    `
    <form action="/contato" method="POST">
    Sua mensagem:
    <input type="text" name="message" />
    <button type="submit">Enviar</button>
    </form>
    `
  );
};

exports.trataPost = (req, res) => {
    res.send(`Sua mensagem: ${req.body.message}`)
}
