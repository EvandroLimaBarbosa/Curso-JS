var resultado = document.getElementById('container_resultado');
var calculo = document.getElementById('container_calculo');
var trava = 0

function insert(num) {
    if (calculo.innerText != ' '){
        console.log(trava)
            if (trava == 0){
                resultado.innerText = num;
                trava = 1;
            }else{
                resultado.innerText += num;
            }
        }else {
            if (resultado.innerText == '0'){
                resultado.innerText = num;
            }else {
                resultado.innerText += num;
            }
    }
}

function insertsimbolo(num) {
    calculo.innerText += ` ${resultado.innerText} ${num}`;
    trava = 0
}

function limpar() {
    resultado.innerHTML = '0'
    calculo.innerHTML = ' '
}

function apagar() {
    if (resultado.innerText.length == '1'){
        resultado.innerText = '0';
    }else {
        resultado.innerText = resultado.innerText.substring(0, resultado.innerText.length-1);
    }
}

function calcular(){
    calculo.innerText += ` ${resultado.innerText}`;
    var valorfinal = calculo.innerText;
    console.log(valorfinal)
    resultado.innerHTML = eval(valorfinal);

    calculo.innerText += ` = ${eval(valorfinal)}`;
}