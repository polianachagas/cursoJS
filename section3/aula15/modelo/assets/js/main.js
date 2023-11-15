const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container'); //querySelector seleciona a primeira classe que acha
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div); 

//----
// function adicionarElementos() {
//     var p = document.createElement('p');
//     var d = document.createElement('div');
//     var foot = document.createElement('footer');
//     var s = document.createElement('section');

//     var frase1 = document.createTextNode('Frase 1');
//     var frase2 = document.createTextNode('Frase 2');
//     var frase3 = document.createTextNode('Frase 3');
//     var frase4 = document.createTextNode('Frase 4');

//     p.appendChild(frase1);
//     d.appendChild(frase2);
//     foot.appendChild(frase3);
//     s.appendChild(frase4);

//     var divAtual = document.getElementsByClassName('.container');
//     document.body.insertAdjacentHTML(p, d, foot, s, divAtual);
// }

// adicionarElementos();
