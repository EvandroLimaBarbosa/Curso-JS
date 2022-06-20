const url = "https://6282db2492a6a5e4621a86f3.mockapi.io/api/start/cadastros"

async function fetchUsuarios(url) {
    const response = await fetch(url)
    const json = await response.json()
    return json
}

const requisicao = fetchUsuarios(url)

requisicao.then(r => {
    console.log(r)
})