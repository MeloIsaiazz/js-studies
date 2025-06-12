const express = require("express");
const route = express.Router();

// Middlewears
function meuMiddleweare(req, res, next) {
    console.log()
    console.log("Passei pelo middlewear")
    console.log()
    next()
}

// Controllers
const indexController = require("./src/controllers/indexController")

// Rotas da Home
route.get("/", meuMiddleweare, indexController.index);

module.exports = route;