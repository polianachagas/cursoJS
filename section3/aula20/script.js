//CONTINUE E BREAK

const numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
    if (numero === 2 || numero === 1) {
        continue; //vai pra próxima iteração (pula o número)
    }

    if (numero === 4) {
        break; //sai do laço quando chega no número
    }

    console.log(numero);
}