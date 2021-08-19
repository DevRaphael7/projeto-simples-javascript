var texto = document.getElementById("texto")

function relogioFunc(){
    var atualTempo = new Date()
    var horas = atualTempo.getHours()
    var minutos = atualTempo.getMinutes()
    var segundos = atualTempo.getSeconds()

    if(horas > 12){
        horas = horas - 12
    }

    if(horas === 0){
        horas = 12
    }

    if(horas < 10){
        horas = '0' + horas
    }

    if(minutos < 10){
        minutos = '0' + minutos
    }

    if(segundos < 10){
        segundos = '0' + segundos
    }

    texto.innerText = horas + ':' + minutos + ':' + segundos
}

setInterval(relogioFunc, 1)