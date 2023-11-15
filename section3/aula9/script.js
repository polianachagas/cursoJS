const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Sunday';
        break;
    case 1:
        diaSemanaTexto = 'Monday';
        break;
    case 2:
        diaSemanaTexto = 'Tuesday';
        break;
    case 3:
        diaSemanaTexto = 'Wednesday';
        break;
    case 4:
        diaSemanaTexto = 'Thursday';
        break;
    case 5:
        diaSemanaTexto = 'Friday';
        break;
    case 6:
        diaSemanaTexto = 'Saturday';
        break;
    default:
        diaSemanaTexto = '';
}

console.log(diaSemanaTexto);