
import "./assets/css/style.css"; // Estilo Css com transpilador
import GeraCPF from "./modules/GeraCPF.js";

const btnCopiar = document.querySelector("button");
const btnRegen = document.querySelector(".regenerate");
const cpfField = document.querySelector(".cpf-gerado");

function GerarNovoCpf() {
    const geradorCpf = new GeraCPF();
    cpfField.innerHTML = geradorCpf.cpfFormatado;
}

GerarNovoCpf()

btnCopiar.addEventListener('click', (event) => {
    navigator.clipboard
      .writeText(cpfField.innerHTML)
      .then(() => {
        btnCopiar.innerHTML = "Copiado ;)";
        btnCopiar.style.backgroundColor = "#337733";
        
        setTimeout(() => {
            btnCopiar.innerHTML = "Copiar";
            btnCopiar.style.backgroundColor = "var(--primary-color)";
        }, 3000);
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
});

btnRegen.addEventListener('click', (event) => {
    GerarNovoCpf()
});