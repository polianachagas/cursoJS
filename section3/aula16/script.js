//for in -> lê on índices ou chaves do objeto

// const frutas = ['maçã', 'uva', 'cereja'];

// for (let i in frutas) {
//     console.log(i);
// }

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 26
};
//console.log(pessoa.nome);
//console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}