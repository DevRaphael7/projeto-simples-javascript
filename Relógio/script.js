
const PonteiroHoras = document.getElementById('Ponteiro_horas')
const PonteiroMinutos = document.getElementById('Ponteiro-minutos')
const PonteiroSegundos = document.getElementById('Ponteiro-segundos')


function ponteiros_gira(){
    const atualTempo = new Date()
    var segundos = atualTempo.getSeconds()/60
    var minutos = (segundos + atualTempo.getMinutes())/60
    var horas = (minutos + atualTempo.getHours())/12
    console.log(segundos, minutos, horas)
    ajustandoRotacao(PonteiroSegundos, segundos)
    ajustandoRotacao(PonteiroMinutos, minutos)
    ajustandoRotacao(PonteiroHoras, horas)
    console.log(segundos)
}

function ajustandoRotacao(element, rotacao){
    element.style.setProperty('--rotation', rotacao * 360)
}

ponteiros_gira()

setInterval(ponteiros_gira, 1000);