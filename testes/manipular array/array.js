const precos = [
    "Credito",
    "R$100",
    "R$500",
    "Contas a Pagar",
    "R$900",
    "R$500",
    "Meus Dados"
];

const precosFiltro = precos.filter(preco => preco.includes("R$"))

const precoNumeros = precosFiltro.map(preco => Number(preco.replace("R$", ""))
);

const total = precoNumeros.reduce((acumulador, item) => 
{
    console.log(`${acumulador} + ${item} = ${acumulador + item}`)
    return acumulador + item
}, 0)

console.log(total)