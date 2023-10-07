function saudacao(nome) {
    // console.log(`Bom dia ${nome}`)
    return `Bom dia ${nome}`
}
console.log(saudacao('Poliana'))

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(2, 2))

const raiz = function (n) {
    return n ** 0.5
};
console.log(raiz(9))

const raiz2 = (n2) => {
    return n2 ** 0.5
};

// const raiz2 = n => n ** 0.5;