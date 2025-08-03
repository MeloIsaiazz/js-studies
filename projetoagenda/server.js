// Variáveis de Ambiente
require('dotenv').config();

// Inicializar App
const express = require('express');
const app = express();

// Conexão com o Mongo
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

// Sessão  
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Mensagens de avisos
const flash = require('connect-flash');

// Utils
const path = require('path');

// Proteção contra Cross site Request Forgery
const csrf = require('csurf');

// Middlewares Globais
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// Rotas
const routes = require('./routes');

/*
  Configs do Servidor
  -------------------
*/

// Habilida reqisições post
app.use(express.urlencoded({ extended: true }));

// Permite usar json como linguagem de api
app.use(express.json());

// Define a pasta de arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configuração de Sessão com mongo
const sessionOptions = session({
  secret: process.env.SESSIONSECRET,
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

// Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

// Middlewares Globais
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

// Abrir porta do servidor
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
