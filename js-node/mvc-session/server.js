require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Conectar a base de Dados
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Conectado ao MongoDB");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

// Configurações de Session
const session = require("express-session");
const MongoStore = require("mongo-connect");

// Configurações de Flash Message
const Flash = require("flash-connect");


const routes = require("./routes");
const path = require("path");

// Configurações do servidor
app.use(express.urlencoded({ extended: true })); // Body de requisição
app.use(express.static(path.resolve(__dirname, "public"))); // Arquivos estáticos
app.set("views", path.resolve(__dirname, "src", "views")); // Views
app.set("view engine", "ejs"); // Engine de Views
app.use(routes); // Arquivo de Rotas

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("App rodando na porta 3000");
  });
});
