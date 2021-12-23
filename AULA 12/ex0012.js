var agora = new Date().getHours()
console.log(`Agora São Exatamente ${agora} horas.`)
if (agora < 18) {
    console.log(`Boa Tarde!`)
} else if (agora < 24) {
    console.log(`Boa Noite!`)
} else {
    console.log(`Man, O dia só tem 24 horas!!, ta chapado ?`)
}
