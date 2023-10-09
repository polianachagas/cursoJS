// && - false && true -> retorna o valor mesmo de false 
// console.log('Pedro' && true && NaN);

// FALSY (fingem ser valores falsos)
// false -> falso literal
// 0 -> falsy
// '' -> falsy
// "" -> falsy
// `` -> falsy
// null/undefined -> falsy 
// NaN -> falsy // qualquer coisa diferentes desses acima avalia em true no js
// console.log('Luiz' && 'Maria');
// console.log('Luiz', '' && 'Maria');
// console.log('Luiz', NaN, 'Maria');

// function falaOi() {
//     return 'Oi';
// }

// let vaiExecutar = 'l'; //l e um valor verdadeiro entao ele ve que e verdadeiro e passa para a funcao
// // let vaiExecutar = undefined // nao executa a funcao pq undefined e um valor falso

// console.log(vaiExecutar && falaOi());

// OR
// || -> true && false -> vai retornar o "valor verdadeiro"
//console.log(0 || false || null || "oi");

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // vai ser vermelha (cor do usuario), mas se a cor do usuario fosse nul a cor padrao seria preto