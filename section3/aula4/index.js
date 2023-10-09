const hora = 1;

if (hora < 12 && hora >= 6) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 19) {
    console.log('Boa tarde!');
} else if (hora >= 19 && hora < 23) {
    console.log('Boa noite!');
} else if (hora >= 0 && hora < 6) {
    console.log('Boa madrugada!');
} else {
    console.log('Hora inválida');
}