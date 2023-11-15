
//const data = new Date(); //Date é um objeto
//mes 0 é janeiro e mês 11 é dezembro
// //const data = new Date(2023, 9, 25, 15, 14, 27, 500);
// const data = new Date('2023-10-25 21:45:23');

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); //mês começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Dia da semana', data.getDay()); //0 é domingo

// console.log(data.toString());


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} | ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);