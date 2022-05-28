let btn = document.getElementById('verSenha');
let btnconfirm = document.getElementById('verConfirmSenha');

let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');

let usuario = document.getElementById('usuario');
let labelUsuario = document.getElementById('labelUsuario');

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');

let confirmSenha = document.getElementById('confirmSenha');
let labelConfirmSenha = document.getElementById('labelConfirmSenha');


function liberar(a, b, txt, minimo){
    if (a.value.length == 0){
        b.removeAttribute(none);
        b.innerHTML = txt;
        a.removeAttribute('style');
    }else{
        if(a.value.length <= minimo - 1){
            b.setAttribute('style', 'color: red');
            b.innerHTML = `${txt} *Insira no minimo ${minimo} caracteres`;
            a.setAttribute('style', 'border-color: red');
        }else{
            b.setAttribute('style', 'color: green')
            b.innerHTML = txt;
            a.setAttribute('style', 'border-color: green')
        }
    }
}

function liberarnome() { liberar(nome, labelNome, 'Nome', 4) }
nome.addEventListener('keyup', liberarnome);

function liberarusuario() { liberar(usuario, labelUsuario, 'Usuario', 5) }
usuario.addEventListener('keyup', liberarusuario);


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

