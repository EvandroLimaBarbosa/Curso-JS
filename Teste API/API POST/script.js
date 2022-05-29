let btn = document.getElementById('verSenha');

btn.addEventListener('click', ()=>{
    let inputSenha = document.getElementById('senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
        btn.setAttribute('class', 'fa-solid fa-eye-slash')
        
    }else{
        inputSenha.setAttribute('type', 'password')
        btn.setAttribute('class', 'fa-solid fa-eye')

}
})