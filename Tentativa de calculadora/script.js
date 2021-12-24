let res = document.getElementById('res')
res.innerText = ` `

    function fclear (){
    res.innerText = ` `
}
    function fbackspace(){
    
}
    function fporcentagem (){
    res.innerText = ` `
}
    function fdividir (){
    res.innerText += `÷`
}
    function f7 (){
    res.innerText += `7`
}  
    function f8 (){
    res.innerText += `8`
}    
    function fbackspace(){
        let inputText = res.value
        res.value = inputText.substring(0,inputText.length-1)
        res.innerText = res.value

} 