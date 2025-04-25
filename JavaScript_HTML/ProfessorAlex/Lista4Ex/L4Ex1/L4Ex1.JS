
function rodPro(){
let msgFrase = prompt(`Digite uma menssagem: `)

let msgCifradaA = msgFrase.replace(/[a,á,à,ã,â]/gi, "@")
let msgCifradaE = msgCifradaA.replace(/[e,é,è,ê,]/gi, "&")
let msgCifradaI = msgCifradaE.replace(/[i,í,ì,î,]/gi, "!")
let msgCifradaO = msgCifradaI.replace(/[o,ó,ò,ô,õ]/gi, "()")
let msgCifradaU = msgCifradaO.replace(/[u,ú,ù,û,]/gi, "#")

alert(`Frese códificada:

${msgCifradaU}`)
}
