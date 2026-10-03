function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML= (`Agora são ${hora}h ${min}m`)
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#D7CA93'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FDC554'
    }else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#2F58A7'
    }
}
