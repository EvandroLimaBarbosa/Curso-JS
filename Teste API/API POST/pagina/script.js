function iniciar(){
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.querySelector('#logado');

logado.innerHTML = `Usuario: ${userLogado.user[0].toUpperCase() + userLogado.user.substring(1)}`;
}

if (localStorage.getItem('token') == null) {
    window.alert('Você precisa estar logado para acessar esta página!!')
    window.location.href = '../index.html'
}

function sair() {
    localStorage.removeItem('token')
    window.location.href = '../index.html'



}