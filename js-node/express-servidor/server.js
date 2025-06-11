import express from 'express';
const app = express()

//         CRIAR   LER   EDITAR  DELETAR/EXCLUIR
// CRUD -> Create, Read, Update, Delete
//         POST    GET   PUT     DELETE

// www.meusite.com/           <-- GET -->    Entrega a página "/""
// www.meusite.com/sobre      <-- GET -->    Entrega a página "sobre"
// www.meusite.com/contato    <-- GET -->    Entrega a página "contato"

// Rota index ou /
app.get("/", (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="name" />
        <button type="submit">Enviar</button>
        </form>
    `.trim())
});

app.post("/", (request, response) => {
    response.send("Form recebido")
});

/*
// Rota Sobre
app.get("/sobre", (request, response) => {
    console.log('Fui para sobre')
    response.send("Você está na página: Sobre");
});

// Rota contato
app.get("/contato", (request, response) => {
    console.log('Fui para contato')
    response.send("Você está na página: Contato")
});
*/

// API -> Endpoint
app.get("/produto", (request, response) => {
    const produto = {
        nome: "Marmiteira Elétrica",
        preco: 25,
        dataCompra: "2025-04-21"
    }
    response.send(produto)
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Visite: http://localhost:3000');
    console.log('Servindo na porta 3000');
});