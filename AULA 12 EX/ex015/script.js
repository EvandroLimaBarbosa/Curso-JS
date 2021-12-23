function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value == "" || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'kidboy.png')
                document.body.style.background = '#81F7F3'
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'criancahomem.png')
                document.body.style.background = '#04B4AE'
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultohomem.png')
                document.body.style.background = '#084B8A'
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'oldboy.png')
                document.body.style.background = '#0A0A2A'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'kidgirl.png')
                document.body.style.background = '#F781F3'
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'criancamulher.png')
                document.body.style.background = '#FF00FF'
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultamulher.png')
                document.body.style.background = '#6A0888'
            } else if (idade >= 50) {
                // Idoso
                img.setAttribute('src', 'oldgirl.png')
                document.body.style.background = '#610B38'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}