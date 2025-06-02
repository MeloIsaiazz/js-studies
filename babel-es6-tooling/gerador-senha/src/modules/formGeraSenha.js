import GeraSenha from "./geradores";

const senha = document.querySelector(".senha-gerada");
const btbGerarSenha = document.querySelector("button");
const rangeTamanho = document.getElementById("tamanho");
const cbMaiusculas = document.getElementById("maiusculas");
const cbMinusculas = document.getElementById("minusculas");
const cbNumeros = document.getElementById("numeros");
const cbSimbolos = document.getElementById("simbolos");

export default () => {
  btbGerarSenha.addEventListener('click', (event) => {
    senha.innerHTML = Gera()
  });
};

function Gera() {
  return GeraSenha(
    rangeTamanho.value,
    cbMaiusculas.checked,
    cbMinusculas.checked,
    cbNumeros.checked,
    cbSimbolos.checked
  );
}