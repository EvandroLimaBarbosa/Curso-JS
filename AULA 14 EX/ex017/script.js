function gerar() {

    var num = document.getElementById('txtnum')
    num = Number(num.value)
    var n1 = document.getElementById('n1')

    if(num == 0){
        window.alert('Por Favor, digite um Numero!')
    }else{
   
        n1.innerText = `${num} x 1 = ${num*1}`
        n2.innerText = `${num} x 2 = ${num*2}`
        n3.innerText = `${num} x 3 = ${num*3}`
        n4.innerText = `${num} x 4 = ${num*4}`
        n5.innerText = `${num} x 5 = ${num*5}`
        n6.innerText = `${num} x 6 = ${num*6}`
        n7.innerText = `${num} x 7 = ${num*7}`
        n8.innerText = `${num} x 8 = ${num*8}`
        n9.innerText = `${num} x 9 = ${num*9}`
        n10.innerText = `${num} x 10 = ${num*10}`
    }

}