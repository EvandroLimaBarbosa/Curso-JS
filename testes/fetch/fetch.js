const url = "https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/cadastros"

const requisicao = fetch(url)
    .then(response => response.json())
    .then(json => {
        document.querySelector("#app").innerHTML = json[0].nomeCad
        console.log(json)
    })

console.log(requisicao)


const data = {
    nomeCad: "teste nome manual",
    userCad: "teste usuario manual",
    senhaCad: "teste senha manual"

}

fetch(url, {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})