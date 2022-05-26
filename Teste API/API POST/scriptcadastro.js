let btn = document.getElementById('verSenha');
let btnconfirm = document.getElementById('verConfirmSenha');
let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');

let usuario = document.getElementById('usuario');
let labelUsuario = document.getElementById('labelusuario');

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');

let confirmSenha = document.getElementById('confirmSenha');
let labelConfirmSenha = document.getElementById('labelConfirmSenha');


nome.addEventListener('keyup', ()=> {
    if (nome.value.length == 0){
        labelNome.removeAttribute('style');
        labelNome.innerHTML = 'Nome';
        nome.removeAttribute('style');
    }else{
        if(nome.value.length <= 3){
            labelNome.setAttribute('style', 'color: red');
            labelNome.innerHTML = 'Nome *Insira no minimo 4 caracteres';
            nome.setAttribute('style', 'border-color: red');
        }else{
            labelNome.setAttribute('style', 'color: green')
            labelNome.innerHTML = 'Nome';
            nome.setAttribute('style', 'border-color: green')
        }
    }
})

function cadastrar() {
    window.alert('botão clicado');
}

btn.addEventListener('click', ()=>{
    let inputSenha = document.getElementById('senha')
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

btnconfirm.addEventListener('click', ()=>{
    let inputconfirmSenha = document.getElementById('confirmSenha')
    if(inputconfirmSenha.getAttribute('type') == 'password'){
        inputconfirmSenha.setAttribute('type', 'text')
    }else{
        inputconfirmSenha.setAttribute('type', 'password')
    }
})

