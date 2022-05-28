let btn = document.getElementById('verSenha'); // icone de olho para ver a senha
let btnconfirm = document.getElementById('verConfirmSenha');// icone de olho para ver a senha do confirmar

let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');

let usuario = document.getElementById('usuario');
let labelUsuario = document.getElementById('labelUsuario');

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');

let confirmSenha = document.getElementById('confirmSenha');
let labelConfirmSenha = document.getElementById('labelConfirmSenha');

// função de validação de texto, se não passar de um certo tamanho não é validado
function liberar(a, b, txt, minimo){
    if (a.value.length == 0){
        b.removeAttribute('style');
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

// usando a função de validação
function liberarnome() { liberar(nome, labelNome, 'Nome', 4) }
nome.addEventListener('keyup', liberarnome);

function liberarusuario() { liberar(usuario, labelUsuario, 'Usuario', 5) }
usuario.addEventListener('keyup', liberarusuario);

function liberarusuario() { liberar(senha, labelSenha, 'Senha', 6) }
senha.addEventListener('keyup', liberarusuario);


// função que verifica se a confirmação de senha está igual a senha e muda o estilo
// (daria para fazer na função de cima porém seria mais trabalhoso)
confirmSenha.addEventListener('keyup', ()=>{
if (confirmSenha.value.length == 0){
    labelConfirmSenha.removeAttribute('style');
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.removeAttribute('style');
}else{
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = `Confirmar senha *As senhas não são iguais`;
        confirmSenha.setAttribute('style', 'border-color: red');
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha';
        confirmSenha.setAttribute('style', 'border-color: green')
    }
}
})

// função que esconde e revela a senha
function funcMostrarSenhas(input){
    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
    }else{
        input.setAttribute('type', 'password')
    }
}

// usando a função que esconde as senhas
function mostrarSenhas() { funcMostrarSenhas(senha) }
btn.addEventListener('click', mostrarSenhas);

function mostrarConfirmSenhas() { funcMostrarSenhas(confirmSenha) }
btnconfirm.addEventListener('click', mostrarConfirmSenhas);