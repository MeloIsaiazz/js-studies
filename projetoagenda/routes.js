const express = require("express");
const route = express.Router();

// Controllers
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// Rotas
route.get("/", homeController.index);

route.get("/login", loginController.index);
route.post("/login/login", loginController.login);
route.post("/login/register", loginController.register);

route.get('*', (req, res) => res.render('404'));

module.exports = route;
