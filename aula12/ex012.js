var agora = new Date()
var hora = agora.getHours()
if(hora <= 11 && hora >= 6){
    console.log(`agora são ${hora} horas. BOM DIA!`)
}else if(hora <= 17 && hora >= 12){
    console.log(`agora são ${hora} horas. BOA TARDE!`)
}else if (hora >17 && hora<24){
    console.log(`agora são ${hora} horas. BOA NOITE!`)
}else {
    console.log(`agora são ${hora} horas. BOA MADRUGADA!`)
}