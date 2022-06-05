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


function estiloVermelho() {
    userLabel.setAttribute('style', 'color: red');
    usuario.setAttribute('style', 'border-color: red');
    senhaLabel.setAttribute('style', 'color: red');
    senha.setAttribute('style', 'border-color: red');

    msgError.setAttribute('style', 'display: block')
    usuario.focus()
}



function entrar() {
    let usuario = document.getElementById('usuario');
    let userLabel = document.getElementById('userLabel');

    let senha = document.getElementById('senha');
    let senhaLabel = document.getElementById('senhaLabel');


    let msgError = document.getElementById('msgError');

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }



 const url = 'https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/cadastros'


        fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            // manipula o sucesso da requisição


            var contador = 0

             for (let index = 0; index < data.length; index++) {
             if (usuario.value == data[index].userCad && senha.value == data[index].senhaCad) {
                 userValid = {
                     nome: data[index].nomeCad,
                     user: data[index].userCad,
                     senha: data[index].senhaCad
                 }
                 contador = index
                 break
             }
            }


            console.log(data)



            if (usuario.value == "" && senha.value == "") {
                estiloVermelho()
                msgError.innerHTML = 'Usuario ou senha vazios'
        
                
            } else if (usuario.value == data[contador].userCad && senha.value == data[contador].senhaCad) {
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
            }

            

        })
        .catch(function (error) {
            estiloVermelho()
            msgError.innerHTML = 'Algo de errado com o codigo'
            console.error(error);
        });








}
