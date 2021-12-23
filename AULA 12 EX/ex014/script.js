function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var msgbom = window.document.getElementById('msgbom')
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        msgbom.innerHTML = 'Bom dia!'
        document.body.style.background = '#bcd2dd'
        // BOM DIA!!        
    }   else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        msgbom.innerHTML = 'Boa Tarde!'
        document.body.style.background = '#915329'
        // BOA TARDE
    }   else {
        img.src = 'fotonoite.png'
        msgbom.innerHTML = 'Boa Noite!'
        document.body.style.background = '#032227'
        // BOA NOITE
    }

     
}

