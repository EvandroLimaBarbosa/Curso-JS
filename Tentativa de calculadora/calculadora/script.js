let res = document.getElementById('res');
var textocalculo = document.getElementById('calculo');
var simbolo
var primeiroresultado
var segundoresultado

function calcular(simbolo){
    primeiroresultado = res.innerText
    res.innerText = '0'
    textocalculo.innerText = `${primeiroresultado} ${simbolo}`
}


function limpar (){
    res.innerHTML = '0'
    textocalculo.innerText = ''
}

function apagar (){

}

function sezero (){
if (res.innerText == '0') {
    res.innerText = ''
}
}

function n1 (){
    sezero()
    res.innerText += '1'

}

function n2 (){
    sezero()
    res.innerText += '2'
}

function n3 (){
    sezero()
    res.innerText += '3'
}

function n4 (){
    sezero()
    res.innerText += '4'
}


function n5 (){
    sezero()
    res.innerText += '5'
}

function n6 (){
    sezero()
    res.innerText += '6'
}

function n7 (){
    sezero()
    res.innerText += '7'
}

function n8 (){
    sezero()
    res.innerText += '8'
}

function n9 (){
    sezero()
    res.innerText += '9'
}


function n0 (){
    res.innerText += '0'
}

function nponto (){
    res.innerText += '.'
}

function somar() {
    simbolo = '+'
    calcular(simbolo)
}

function subtrair() {
    simbolo = '-'
    calcular(simbolo)
}

function multiplicar(){
    simbolo = 'x'
    calcular(simbolo)
}

function dividir(){
    simbolo = '÷'
    calcular(simbolo)
}


function apagar() {
    valor = res.innerText;
    tamanho = valor.length
    res.innerText = valor.substring(0, tamanho-1)
  }

function igual(){
    segundoresultado = res.innerText
    textocalculo.innerText += ` ${res.innerText}`;


    if(simbolo=='+'){
        res.innerText = +primeiroresultado + +segundoresultado
    }else if(simbolo=='-'){
        res.innerText = +primeiroresultado - +segundoresultado
    }else if(simbolo=='x'){
        res.innerText = +primeiroresultado * +segundoresultado
    }else if(simbolo=='÷'){
        res.innerText = +primeiroresultado / +segundoresultado
    }


    
    textocalculo.innerText += ` = ${res.innerText}`
}


function porcento() {
    window.alert('Erro!, Essa função ainda não está pronta.')
}