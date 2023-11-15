const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 23,
    endereco: { //objeto dentro de um objeto
        rua: 'Av Brasil',
        numero: 320,
    }
};

//const { nome } = pessoa; //atribuição via desestruturação

//const { nome, sobrenome, idade, estado_civil = 'não existe' } = pessoa;
//console.log(nome, sobrenome, idade, estado_civil);

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco);

