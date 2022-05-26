let btn = document.getElementById('verSenha');

btn.addEventListener('click', ()=>{
    let inputSenha = document.getElementById('senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }

})