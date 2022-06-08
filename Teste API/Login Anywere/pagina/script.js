function iniciar(){
let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.querySelector('#logado');
let txtnome = userLogado.nome.split(" ", 1)[0]


console.log(txtnome)
logado.innerHTML = `Nome usuario: ${txtnome.toUpperCase().substring(0,1) + txtnome.substring(1).toLowerCase()}`;
}

if (localStorage.getItem('token') == null) {
    window.alert('Você precisa estar logado para acessar esta página!!')
    window.location.href = '../index.html'
}

function sair() {
    localStorage.removeItem('userLogado');
    localStorage.removeItem('token');
    window.location.href = '../index.html';



}