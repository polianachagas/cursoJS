const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} esta falando oi`)
    },

    incrementaIdade() {
        this.idade++;
        console.log(this.idade);
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//         // nome: nome,
//         // sobrenome: sobrenome,
//         // idade: idade
//     }; 
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Ana', 'Maria', 22);
// const pessoa3 = criaPessoa('Luis', 'Carlos', 36);

// console.log(pessoa1.nome);

// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// const pessoa2 = {
//     nome: 'Ana',
//     sobrenome: 'Maria',
//     idade: 22
// };

// console.log(pessoa1.nome);