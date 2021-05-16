const date = new Date();
const m = date.getMonth();
const y = date.getFullYear();
const dat = date.getDate();

const Mounth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Augusto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

document.querySelector("#dateNow").innerHTML = "Dia " + dat + " de " + Mounth[m] + " de " + y;