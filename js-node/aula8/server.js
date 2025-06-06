import express from 'express';
const app = express()

// Rota index ou /
app.get("/", (request, response) => {
    response.send(
        `<form action="/" method="POST">
        Nome: <input type="text" name="name" />
        <button type="submit">Enviar</button>
        </form>`
    )
});

app.post("/", (request, response) => {
    response.send("Form recebido")
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Visite: http://localhost:3000');
    console.log('Servindo na porta 3000');
});
