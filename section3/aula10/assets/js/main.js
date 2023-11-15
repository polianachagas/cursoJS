const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'domingo';
            return diaSemanaTexto;
            break;
        case 1:
            diaSemanaTexto = 'segunda';
            return diaSemanaTexto;
            break;
        case 2:
            diaSemanaTexto = 'terça';
            return diaSemanaTexto;
            break;
        case 3:
            diaSemanaTexto = 'quarta';
            return diaSemanaTexto;
            break;
        case 4:
            diaSemanaTexto = 'quinta';
            return diaSemanaTexto;
            break;
        case 5:
            diaSemanaTexto = 'sexta';
            return diaSemanaTexto;
            break;
        case 6:
            diaSemanaTexto = 'sábado';
            return diaSemanaTexto;
            break;
        default:
            diaSemanaTexto = '';
    }
}

function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'janeiro';
            return nomeMes;
            break;
        case 1:
            nomeMes = 'fevereiro';
            return nomeMes;
            break;
        case 2:
            nomeMes = 'março';
            return nomeMes;
            break;
        case 3:
            nomeMes = 'abril';
            return nomeMes;
            break;
        case 4:
            nomeMes = 'maio';
            return nomeMes;
            break;
        case 5:
            nomeMes = 'junho';
            return nomeMes;
            break;
        case 6:
            nomeMes = 'julho';
            return nomeMes;
            break;
        case 7:
            nomeMes = 'agosto';
            return nomeMes;
            break;
        case 8:
            nomeMes = 'setembro';
            return nomeMes;
            break;
        case 9:
            nomeMes = 'outubro';
            return nomeMes;
            break;
        case 10:
            nomeMes = 'novembro';
            return nomeMes;
            break;
        case 11:
            nomeMes = 'dezembro';
            return nomeMes;
            break;
        default:
            nomeMes = '';
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} ` + `de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
        );
}

h1.innerHTML = criaData(data);

