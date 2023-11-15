//... rest, ...spread

// const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const [um, dois, ...resto] = numeros;
// console.log(um, dois);
// console.log(resto);

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco);