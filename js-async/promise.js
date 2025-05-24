import { rand } from "./functions/rand.js";

function esperaAi(msg, tempo) {
  // Executa um bloco de ação de forma assíncrona (resolve = Sucesso, reject = erro)
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Espera a primeira função terminar para depois partir para a próxima
// esperaAi("Frase 1", rand(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAi("Frase 2", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   });

const promises = [
  // "Primeiro item",
  esperaAi("Promise 1", rand(1, 3)),
  esperaAi("Promise 2", rand(1, 3)),
  esperaAi("Promise 3", rand(1, 3)),
  // "Ultimo item",
];

// Exibe o array promises depois de concluir todas as requisições
// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });


// Executa o primeiro promise que der retorno dentro de um array de promises
Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

