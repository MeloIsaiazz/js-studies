exports.paginaInicial = (req, res) => {
  res.send(
    `
    <form action="/" method="POST">
    Nome:
    <input type="text" name="nome" />
    <button type="submit">Enviar</button>
    </form>
    `
  );
};

exports.trataPost = (req, res) => {
    res.send("Ei, sou sua rota de post!")
}
