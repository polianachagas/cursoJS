function calcularIMC() {

    
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const peso = form.querySelector('#peso');
    const altura = form.querySelector('#altura');

    const newPeso = parseFloat(peso.value);
    const newAltura = parseFloat(altura.value);

    //console.log(newPeso);
    //console.log(newAltura);

    const imc = newPeso / (newAltura * newAltura);

    //console.log(imc.toFixed(2));

    function verificarIMC() {
        if (imc < 18.5) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso`;
        }
        else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está no peso normal`;
        }
        else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso`;
        }
        else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 1`;
        }
        else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 2`;
        } 
        else {
            resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Você está com obesidade grau 3`;
        }
    }
    verificarIMC();
}

calcularIMC();