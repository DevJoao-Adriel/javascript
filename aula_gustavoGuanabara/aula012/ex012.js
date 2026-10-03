var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()
console.log (`Agora são exatamente ${hora}h${minuto}m${segundo}s `)

if(hora < 12){
    console.log (`Bom dia!`)
} else if (hora <=18){
    console.log (`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}