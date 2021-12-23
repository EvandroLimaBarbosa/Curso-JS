let num = [5, 8, 2, 9, 3]

console.log(`Valores normais:`)
console.log(num)

num.sort()

num.push(1)

console.log(`Valores Ordenados com 1 adicionado depois`)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`o Valor da primeira posição é o ${num[0]}`)

let pos = num.indexOf(4)

if (pos == -1) {
    console.log(`----- O valor não foi encontrado -----`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}