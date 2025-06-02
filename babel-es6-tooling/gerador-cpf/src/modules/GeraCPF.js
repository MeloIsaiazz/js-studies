import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
  constructor() {
    this.cpf = this.genNewCpf();
  }

  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  genNewCpf() {
    const rawCpf = this.rand();
    const digit1 = ValidaCPF.geraDigito(rawCpf);
    const digit2 = ValidaCPF.geraDigito(rawCpf + digit1);
    const newCpf = rawCpf + digit1 + digit2;

    return newCpf
  }

  get cpfFormatado() {
    return (
      this.cpf.slice(0,3) + '.' +
      this.cpf.slice(3,6) + '.' +
      this.cpf.slice(6,9) + '-' +
      this.cpf.slice(9,11)
    )
  }
}

const gerador = new GeraCPF();

console.log(gerador.genNewCpf());