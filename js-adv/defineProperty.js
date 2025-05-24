function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true
    });
}

const produto1 = new Produto('Celular', 2500)
console.log(produto1)