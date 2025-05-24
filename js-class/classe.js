class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    Falar() {
        console.log(`${this.nome} está falando.`)
    }

    // Getter -> Sempre que eu recuperar: instancia.nome
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }


    get nome() {
        return this._nome
    }

    // Setter -> Sempre que eu fazer: instancia.nome = nome
    set nome(value) {
        this._nome = value
    }
}

// Herança: uma classe pode extender atributos e metodos de outra classe pai
class Crianca extends Pessoa {
    constructor(nome, sobrenome) {
        super(nome, sobrenome)
    }
    
    brincar() {
        console.log(`A criança ${this.nomeCompleto} está brincando.`)
    }
}

p1 = new Crianca('Matheus', 'Isaias');
p1.brincar()