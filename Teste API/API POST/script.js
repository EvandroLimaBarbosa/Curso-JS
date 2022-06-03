let btn = document.getElementById('verSenha');

btn.addEventListener('click', () => {
    let inputSenha = document.getElementById('senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
        btn.setAttribute('class', 'fa-solid fa-eye-slash')

    } else {
        inputSenha.setAttribute('type', 'password')
        btn.setAttribute('class', 'fa-solid fa-eye')

    }
})


function entrar() {
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

    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    function estiloVermelho() {
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');

        msgError.setAttribute('style', 'display: block')
    }
    if (usuario.value == "" && senha.value == "") {
        estiloVermelho()
        msgError.innerHTML = 'Usuario ou senha vazios'

        usuario.focus()
    } else if (usuario.value == userValid.user && senha.value == userValid.senha) {
        userLabel.setAttribute('style', 'color: green');
        usuario.setAttribute('style', 'border-color: green');
        senhaLabel.setAttribute('style', 'color: green');
        senha.setAttribute('style', 'border-color: green');
        msgError.setAttribute('style', 'display: none')

        window.location.href = './pagina/homescreen.html'

        let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)

        localStorage.setItem('token', token)

localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
        estiloVermelho()
        msgError.innerHTML = 'Usuario ou senha incorretos'

        usuario.focus()
    }

}