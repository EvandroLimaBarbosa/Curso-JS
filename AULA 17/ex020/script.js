
    function adicionador(){
        var c = 0

        let num = document.getElementById('numtxt')
        let sel= document.getElementById('seltxt')
    


    if (num.value.length == 0){
        window.alert('Por Favor, Digite Um Número!')
    } else if (num.value > 100 || num.value < 1){
        window.alert('Numero Incorreto, precisa ser entre 0 e 100')
    } else {
        var n = [Number(num.value)]
        sel.innerHTML =  ''
        while(c <= 100){
            if (num == 10){
            let item = document.createElement('option')
            item.push(n[c])
            item.text = `Valor ${n} adicionado.`
            sel.appendChild(item)
            } else {
                window.alert('verau')
            }
            
    }
 }
}




function analisador(){
    


}