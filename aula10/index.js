const nome = "Poliana"; //string
const nome1 = 'Poliana'; //string
const nome2 = `Poliana`; //string
const num1 = 10; //number
const num2 = 10.37; //number
let nomeAluno; //undefined -> nao aponta para local nenhum na memoria
let sobrenomeAluno = null; // nulo -> nao aponta pra local nenhum na memoria
const aprovado = true; //boolean = true, false;

console.log(typeof nome, num1); //ve o tipo dar var

let a = 2;
let b = a;
console.log(a, b);

a = 3;
console.log(a, b);