const primeiroNum = 5;
const segundoNum = 10;
const resultado = primeiroNum * segundoNum;
console.log(resultado);

const nome = "Poliana";
const sobrenome = "Rezende Chagas";
const idade = 21;
const peso = 50;
const altura = 1.68;
let imc = peso / (altura * altura);
const anoNascimento = 2023 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' 
+ peso + ' quilos, tem ' + altura + ' de altura, e seu IMC e ' + imc.toFixed(2));