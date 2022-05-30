let btn = document.getElementById('verSenha'); // icone de olho para ver a senha
let btnconfirm = document.getElementById('verConfirmSenha');// icone de olho para ver a senha do confirmar

let nome = document.getElementById('nome');
let labelNome = document.getElementById('labelNome');
let validNome = false

let usuario = document.getElementById('usuario');
let labelUsuario = document.getElementById('labelUsuario');
let validUsuario = false

let senha = document.getElementById('senha');
let labelSenha = document.getElementById('labelSenha');
let validSenha = false

let confirmSenha = document.getElementById('confirmSenha');
let labelConfirmSenha = document.getElementById('labelConfirmSenha');
let validConfirmSenha = false

// função de validação de texto, se não passar de um certo tamanho não é validado
function liberar(a, b, txt, minimo, validar){
    if (a.value.length == 0){
        b.removeAttribute('style');
        b.innerHTML = txt;
        a.removeAttribute('style');
        validar = false
    }else{
        if(a.value.length <= minimo - 1){
            b.setAttribute('style', 'color: red');
            b.innerHTML = `${txt} *Insira no minimo ${minimo} caracteres`;
            a.setAttribute('style', 'border-color: red');
            validar = false

            
        console.log(validar)
        }else{
            b.setAttribute('style', 'color: green')
            b.innerHTML = txt;
            a.setAttribute('style', 'border-color: green')
            validar = true
            
        console.log(validar)
        }
    }
}

// usando a função de validação
function liberarnome() { liberar(nome, labelNome, 'Nome', 4, validNome) }
nome.addEventListener('keyup', liberarnome);

function liberarusuario() { liberar(usuario, labelUsuario, 'Usuario', 5, validUsuario) }
usuario.addEventListener('keyup', liberarusuario);

function liberarsenha() { liberar(senha, labelSenha, 'Senha', 6, validSenha) }
senha.addEventListener('keyup', liberarsenha);


// função que verifica se a confirmação de senha está igual a senha e muda o estilo
// (daria para fazer na função de cima porém seria mais trabalhoso)
confirmSenha.addEventListener('keyup', ()=>{
if (confirmSenha.value.length == 0){
    labelConfirmSenha.removeAttribute('style');
    labelConfirmSenha.innerHTML = 'Confirmar Senha';
    confirmSenha.removeAttribute('style');

    validConfirmSenha = false

    console.log(validConfirmSenha)

}else{
    if(confirmSenha.value != senha.value){
        labelConfirmSenha.setAttribute('style', 'color: red');
        labelConfirmSenha.innerHTML = `Confirmar senha *As senhas não são iguais`;
        confirmSenha.setAttribute('style', 'border-color: red');
        validConfirmSenha = false

        console.log(validConfirmSenha)
    }else{
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha';
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
        
        console.log(validConfirmSenha)
    }
}
})

// função que esconde e revela a senha
function funcMostrarSenhas(input, i){
    if(input.getAttribute('type') == 'password'){
        input.setAttribute('type', 'text')
        i.setAttribute('class', 'fa-solid fa-eye-slash')
    }else{
        input.setAttribute('type', 'password')
        i.setAttribute('class', 'fa-solid fa-eye')
    }
}

// usando a função que esconde as senhas
function mostrarSenhas() { funcMostrarSenhas(senha, btn) }
btn.addEventListener('click', mostrarSenhas);

function mostrarConfirmSenhas() { funcMostrarSenhas(confirmSenha, btnconfirm) }
btnconfirm.addEventListener('click', mostrarConfirmSenhas);

function cadastrar(){
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        window.alert('deu boa!!!')
    } else {
        window.alert('ta tudo vazio');
    }

        console.log(validNome)
        console.log(validUsuario)
        console.log(validSenha)
        console.log(validConfirmSenha)

}
