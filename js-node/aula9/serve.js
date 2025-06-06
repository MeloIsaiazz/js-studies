const express = require('express')
const app = express();

app.get("/", (request, response) => {
  response.send(
    `<form action="/" method="POST">
        Nome: <input type="text" name="name" />
        <button type="submit">Enviar</button>
        </form>`
  );
});

app.listen(3000, () => {
    console.log("Visite: http://localhost:3000");
    console.log("Servindo na porta 3000");
})