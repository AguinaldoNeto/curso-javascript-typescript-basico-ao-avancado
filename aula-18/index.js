function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,

    fala() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
    }
}

const pessoa1 = criarPessoa('Aguinaldo', 'Neto', 30);
console.log(pessoa1.nome);
console.log(pessoa1.fala());