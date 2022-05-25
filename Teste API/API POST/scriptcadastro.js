let btn = document.querySelector('#verSenha');

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }

})

let btnconfirm = document.querySelector('#verConfirmSenha');

btnconfirm.addEventListener('click', ()=>{
    let inputconfirmSenha = document.querySelector('#confirmSenha')
    if(inputconfirmSenha.getAttribute('type') == 'password'){
        inputconfirmSenha.setAttribute('type', 'text')
    }else{
        inputconfirmSenha.setAttribute('type', 'password')
    }

})