const verdadeira = true;

//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função

let nome = 'Ana'; //criando 
var nome2 = 'Ana'; //criando

var nome2 = 'Julia'; //redeclarando
console.log(nome, nome2);

if (verdadeira) {
    let nome = 'Bianca'; //criando

    if (verdadeira) {
        let nome = 'Poliana';
        console.log('OK');
    }
}