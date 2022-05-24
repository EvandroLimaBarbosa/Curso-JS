let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
},
emagreceu(p=0){
    console.log('Emagreceu')
    this.peso -= p
}}

amigo.engordar(2)
amigo.emagreceu(10)



console.log(`o ${amigo.nome} pesa ${amigo.peso}Kg`)