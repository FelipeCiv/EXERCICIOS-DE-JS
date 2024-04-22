
function carregar (){
    var foot = window.document.getElementById('foot')
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById('imagem')
    var tit = window.document.getElementById('tit')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    if(hora >= 8 && hora <= 11){
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#FFE785'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#ED724E'
        
    }else if(hora >= 3 && hora<=7){
        img.src = 'fototresdamanha.png'
        document.body.style.background = 'white'
        foot.style.color = 'black'
        tit.style.color = 'black'
        

    }else{
        img.src= 'fotonoite.png'
        document.body.style.background = '#173442'
        //BOA NOITE BRUNO
    }

}