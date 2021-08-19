var idade = document.getElementById('age')
//Sexo masculino e Feminino
var female = document.getElementById('female')
var male = document.getElementById('male')
var altura = document.getElementById('height')
var peso = document.getElementById('peso')
var enviar = document.getElementById('enviar')

function teste(){

    if(idade.value === '' || peso.value === '' || altura.value === ''){
        alert('Os campos não podem ser vazios!')
    }else{
        var pesoFloat = parseFloat(peso.value); var alturaFloat = parseFloat(altura.value) / 100
        console.log(altura.value, alturaFloat)
        var resultado = pesoFloat / (alturaFloat * alturaFloat)
        if(resultado <= 18.5){
            var variavelTeste = 'Abaixo do peso'
        }else if(resultado > 18.5 && resultado <= 24.9){
            var variavelTeste = 'Peso normal'
        }else if(resultado > 24.9 && resultado <= 29.9){
            var variavelTeste = 'Sobrepeso'
        }
        alert(resultado.toFixed(2) + '\t' + variavelTeste)
    }
}

enviar.addEventListener('click', () =>{
    teste()
})