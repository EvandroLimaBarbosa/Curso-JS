const sobremesas = [{
    nome: 'pudim',
    diet: true
},
    {
    nome: 'gelatina',
    diet: false
},
{
    nome: 'bolo de chocolate',
    diet: false
},
{
    nome:'pavê',
    diet: false
},
{
    nome:'mousse',
    diet: true
}
]

const idDiet = item => item.diet
const sobremesasDiet = sobremesas.filter(idDiet);
console.log(sobremesasDiet)

const sobremesaDiet = sobremesas.find(idDiet);
console.log(sobremesaDiet)