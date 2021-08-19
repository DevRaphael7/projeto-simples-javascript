var textUp = document.getElementById('text_up')
var textDown = document.getElementById('text_down')
var operacaoAri = [document.getElementById('operation_div'), document.getElementById('operation_mul'), document.getElementById('operation_sub'), document.getElementById('operation_adi')]
var clearAll = document.getElementById('clear_b')
var deleteText = document.getElementById('delete_b')
var numeros = [document.getElementById("numbers_1"),document.getElementById("numbers_2"), document.getElementById("numbers_3"), document.getElementById("numbers_4"), 
document.getElementById("numbers_5"), document.getElementById("numbers_6"), document.getElementById("numbers_7"), document.getElementById("numbers_8"), document.getElementById("numbers_9"), 
document.getElementById("numbers_0")]
var equalButton = document.getElementById('equal_b')
var virgula = document.getElementById("virgula_b")


function limpa(){
    textUp.innerText = ''
    textDown.innerText = '0'
}

// appendNumber(number){
//     if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
// }

function adicionarNumero(numero){
    if(numero === ',' && textDown.includes(','))return
    if(textDown.innerText == '0'){
        textDown.innerText = numero.toString()
    }else{
        textDown.innerText += numero.toString()
        textDown.innerText = textDown.innerText.split('.')
    }
}

function operacao(operacaoAritmetica){

    var resultado = 0; var variavelTemporaria = 0
    var numberDown = parseFloat(textDown.innerText)
    var numberUp = parseFloat(textUp.innerText)

    if(isNaN(numberDown) || isNaN(numberUp) || numberDown === null || numberUp === null){
        console.log('Condição true')
        variavelTemporaria = 1
    }else{
        switch(operacaoAritmetica){
            case '+':
                resultado = numberDown + numberUp
            break;
            case '-':
                resultado = numberUp - numberDown
            break;
            case '÷':
                resultado = numberUp / numberDown
            break;
            case  'X':
                resultado = numberUp * numberDown
            break;
        }
        variavelTemporaria = 0
    }

    if(variavelTemporaria === 1){
        console.log('Condição true')
        textUp.innerText = textDown.innerText
        console.log(textUp.innerText)
        textDown.innerText = '0'
    }else{
        console.log('Resultado da operação: ' + resultado)
        textUp.innerText = resultado
        textDown.innerText = '0'
    }

}

function igual(){

    textDown.innerText = textUp.innerText
    textUp.innerText = ''
    
}

function deleteLetter(){

    textDown.innerText = textDown.innerText.toString().slice(0, -1)
    if(textDown.innerText === ''){
        textDown.innerText = '0'
    }
}

clearAll.addEventListener('click', ()=> {
    limpa()
})

numeros.forEach(button =>  {
    button.addEventListener('click', () => {
        adicionarNumero(button.innerText)
    })
})
operacaoAri.forEach(button => {
    button.addEventListener('click', () => {
        operacao(button.innerText)

    })
})
equalButton.addEventListener('click', () => {
    igual()
})

deleteText.addEventListener('click', () => {
    deleteLetter()
})