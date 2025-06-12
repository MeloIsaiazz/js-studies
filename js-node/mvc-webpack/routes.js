const express = require("express");
const route = express.Router();

// Controllers
const indexController = require("./src/controllers/indexController")

// Rotas da Home
route.get("/", indexController.index);

module.exports = route;