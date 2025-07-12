const mongoose = require("mongoose");

// Criar o Schema da coleção
const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String,
});

// Instanciar o Model
const HomeModel = mongoose.model("Home", HomeSchema);

// Classe para realizar operações da coleção
class Home {}

module.exports = Home;