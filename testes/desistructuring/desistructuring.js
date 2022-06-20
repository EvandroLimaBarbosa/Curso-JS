// document.documentElement.addEventListener("mousemove", handleMouseMove);

/*
function handleMouseMove({clientX, clientY}) {


    console.log(clientX, clientY)
}



const frutas = ["Banana", "Uva"];
const [fruta1, fruta2] = frutas;

console.log(fruta1, fruta2)
*/

const top_linguagens_favoritas = ["Pyton", "JavaScript", "PHP"]

let [linguagens_favoritas,,linguagens_favoritas_antiga] = top_linguagens_favoritas

console.log(linguagens_favoritas);
console.log(linguagens_favoritas_antiga);

[linguagens_favoritas, linguagens_favoritas_antiga] = [linguagens_favoritas_antiga, linguagens_favoritas];

console.log(linguagens_favoritas);
console.log(linguagens_favoritas_antiga)



