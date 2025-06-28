// Variáveis do Servidor
require("dotenv").config();

// Configurar ambiente do servidor
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

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const sessionOptions = session({
  secret: "secret-express-key",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

// Configuração de rotas e middlewares
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

// Configurações do servidor
app.use(express.urlencoded({ extended: true })); // Body de requisição
app.use(express.static(path.resolve(__dirname, "public"))); // Arquivos estáticos
app.set("views", path.resolve(__dirname, "src", "views")); // Views
app.set("view engine", "ejs"); // Engine de Views
app.use(routes); // Arquivo de Rotas
app.use(middlewareGlobal);

// Disponibilizar porta 3000 para requisições
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("App rodando na porta 3000");
  });
});
