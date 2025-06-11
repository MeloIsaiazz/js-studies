const express = require("express");
const route = express.Router();

// Controllers
const homeController = require("./controllers/homeController")
const contatoController = require("./controllers/contatoController");

// Rotas da Home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost)

// Rotas da Home
route.get("/contato", contatoController.formContato);
route.post("/contato", contatoController.trataPost);

module.exports = route;