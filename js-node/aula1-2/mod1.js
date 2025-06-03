const nome = "Luiz";
const sobrenome = "Miranda";

const NomeCompleto = () => nome + ' ' + sobrenome;
// Exportar modulos com a sintaxe CommonJS é a partir do module.exports

// Jeito 1
module.exports = { nome, sobrenome, NomeCompleto }

// Jeito 2
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.FalaNome = FalaNome

// Jeito 3
// this.qualquerCoisa = qualquerCoisa

