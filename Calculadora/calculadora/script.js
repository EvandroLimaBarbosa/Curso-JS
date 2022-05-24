var resultado = document.getElementById('container_resultado');
var calculo = document.getElementById('container_calculo');
var trava = 0
var reset = 0

function insert(num) {
    if(reset == 1) {
        resultado.innerText = num;
        calculo.innerText = ' '
        reset = 0
    }else if (calculo.innerText != ' '){
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
    if(reset == 1) {
        calculo.innerText = `${resultado.innerText} ${num}`;
        reset = 0;
    }else{
        calculo.innerText += ` ${resultado.innerText} ${num}`;
        trava = 0;
    }
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
    resultado.innerHTML = eval(valorfinal);
    console.log(valorfinal);

    calculo.innerText += ` =`;

    reset = 1
}