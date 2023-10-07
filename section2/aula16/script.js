const num = Number(prompt("Digite um número"));
const num_titulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

num_titulo.innerHTML = num;
texto.innerHTML += `Raiz quadrada: ${Math.pow(num, 2)} </br>`;
texto.innerHTML += `${num} é inteiro: ${Number.isInteger(num)} </br>`;
texto.innerHTML += `É NaN: ${Number.isNaN(num)} </br>`;
texto.innerHTML += `Arredondado para baixo: ${Math.floor(num)} </br>`;
texto.innerHTML += `Arredondado para cima: ${Math.ceil(num)} </br>`;
texto.innerHTML += `Com duas casas decimais: ${num.toFixed(2)} </br>`;