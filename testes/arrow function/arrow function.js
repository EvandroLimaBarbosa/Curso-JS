const nomeMaiusculo = nome => nome.toUpperCase();
const contarLetras = palavra => palavra.length;

console.log(nomeMaiusculo('vraau'))

console.log(contarLetras('Irraaa'))

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active"
    }
    addActiveEvent() {
        this.menuElement.addEventListener("click", event => {
            event.target.classList.add(this.activeClass)
        });
    }
}

const menu = new Menu(".principal")

menu.addActiveEvent()

console.log(menu)