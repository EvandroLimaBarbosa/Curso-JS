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


function entrar(){
    
    let usuario = document.getElementById('usuario');
    let userLabel = document.getElementById('userLabel');
    
    let senha = document.getElementById('senha');
    let senhaLabel = document.getElementById('senhaLabel');

    
    let msgError = document.getElementById('msgError');

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) =>{
        if(usuario.value ==  item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        alert('Deu Certo')
    }else {
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');

        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuario ou senha incorretos'

        usuario.focus()
    }

}