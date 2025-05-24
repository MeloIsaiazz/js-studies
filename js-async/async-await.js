import { rand } from "./functions/rand";

function esperaAi(msg, tempo) {
  // Executa um bloco de ação de forma assíncrona (resolve = Sucesso, reject = erro)
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
  

(async function executa() {
    try {
        const valor1 = await esperaAi("Promise 1", rand(1, 3));
        console.log(valor1);

        const valor2 = await esperaAi("Promise 1", rand(1, 3));
        console.log(valor2);

        const valor3 = await esperaAi("Promise 1", rand(1, 3));
        console.log(valor3);
    } catch(e) {
        console.log(e)
    }
})()