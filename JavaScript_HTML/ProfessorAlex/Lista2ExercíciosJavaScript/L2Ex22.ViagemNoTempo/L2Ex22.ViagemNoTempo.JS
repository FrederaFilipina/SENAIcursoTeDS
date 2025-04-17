/*⌛ 22. Viagem no Tempo

História: Um cientista decide viajar no tempo.
Se o ano for menor que 2020, ele vai para o passado.
Se for maior, vai para o futuro.*/

let anoAtual = Number (prompt("Que ano é esse?"))
let anoVnT = 2020
let anoAgora = new Date ()

if(anoAtual < anoVnT){
    console.log("Sim", anoAgora.getFullYear())
} else {
    console.log("Não", Date)
}