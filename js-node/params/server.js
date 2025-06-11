const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

// Usando Parâmetros de URL
app.get("/produto/:id", (req, res) => {
    res.send(req.params)
});

// Usando Parâmetros de URL
app.get("/", (req, res) => {
    res.send(req.query)
});

// Usando request body
app.get("/formulario", (req, res) => {
    res.send(
        `
        <form action="/info" method="POST">
        Nome: 
        <input type="text" name="name" />
        Sobrenome: 
        <input type="text" name="sobrenome" />
        <button type=submit>Enviar</button> 
        `
    )
});

app.post("/info", (req, res) => {
    res.send(req.body)
})


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Visite: http://localhost:3000');
    console.log('Servindo na porta 3000');
});