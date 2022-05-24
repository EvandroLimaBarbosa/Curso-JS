var numDiaSem = new Date().getDay()
var Dia = new Date().getDate()
var Mes = new Date().getMonth()
var Year = new Date().getFullYear()
var Hora = new Date().getHours()
var Min = new Date().getMinutes()
var Seg = new Date().getSeconds()

//numDiaSem = 7 
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/
switch (numDiaSem){
    case 0:
        var diaSem = (`Domingo`)
        break
    case 1:
        var diaSem = (`Segunda-Feira`)
        break
    case 2:
        var diaSem = (`Terça-Feira`)
        break
    case 3:
        var diaSem = (`Quarta-Feira`)
        break
    case 4:
        var diaSem = (`Quinta-Feira`)
        break
    case 5:
        var diaSem = (`Sexta-Feira`)
        break
    case 6:
        var diaSem = (`Sábado`)
        break
    default:
        console.log(`[ERRO] Dia Inválido!`)
        break
}
console.log(`Dia da Semana: ${diaSem}`)
console.log(`Dia: ${Dia}/${Mes+1}/${Year}`)
console.log(`Hora: ${Hora}:${Min}:${Seg} hrs`)

