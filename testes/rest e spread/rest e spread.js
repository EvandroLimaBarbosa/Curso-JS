//rest traduzido fica "resto", faz com que depois dos três pontinhos faça um array

/*
function showList(empresa, ...clients){
    console.log(empresa);
    console.log,(clients)
}

showList("Destak", "Keity", "Dani",10);
*/


// spread significa "espalhar"
/*
const numeros = [1,2,4,29,32,2,45,3]


const maiorNumero = Math.max(...numeros)

console.log(maiorNumero)

const itens = document.querySelectorAll("li");


[...itens].map(item => {
    console.log(item);
})

console.log([...itens])
*/
/*

const carro = { modelo: "Palio", cor: "cinza", portas: 4, ano: 2008 }

const cloneCarro = {...carro, turbo: true}

const cloneCarro2 = carro

console.log(cloneCarro === carro)
console.log(cloneCarro2 === carro)

console.log(carro)
console.log(cloneCarro)
console.log(cloneCarro2)
*/


class Transporte {
    constructor() {
        this.terrestre = true
        }
        andar() {
            console.log("andou");
        }
}

class Carro extends Transporte {
    constructor(cor, portas) {
        super()
        this.cor = cor;
        this.portas = portas
    }
}

const carro = new Carro("vermelho", 4)

const cloneCarro = {...carro}

console.log(carro)

console.log(cloneCarro)