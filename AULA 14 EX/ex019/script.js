function tabuada (){
    let num = document.getElementById('txtn')
    let tab= document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('Por Favor, Digite Um Número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML =  ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //item.value = `tab${c}`
            item.style = `color: rgb(255, ${c*10}, ${c*50});`
            tab.appendChild(item)
            c++
        }
    }
}
