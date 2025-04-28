
function rodPro(){
let msgFrase = prompt(`Digite uma menssagem: `)
//Solicitação para o usuário escrever uma mensagem

let max = 9
let min = 1
//Definição do intervalo em que os números aleatórios serão gerados

let numA = msgFrase.replace(/[a,á,à,ã,â]/gi, Math.round(Math.random() * (max - min) + min))
let numAE = numA.replace(/[e,é,è,ê]/gi, Math.round(Math.random() * (max - min) + min))
let numAEI = numAE.replace(/[i,í,ì,î]/gi, Math.round(Math.random() * (max - min) + min))
let numAEIO = numAEI.replace(/[o,ó,ò,ô,õ]/gi, Math.round(Math.random() * (max - min) + min))
let numAEIOU = numAEIO.replace(/[u,ú,ù,û]/gi, Math.round(Math.random() * (max - min) + min))
/*Substituição de cada conjunto de vogais por um número aleatório, de forma escalonada, ou seja
na primeira linha todas as vogais "a" se houver, serão substituidas por um número e essa informação
é armazenada e repassada para a linha de baixo, onde o processo vai se repetir até todas as vogais
terem sido transformadas em um número*/

let msgCifrada1= numAEIOU.replace(/[1]/gi, "!")
let msgCifrada2= msgCifrada1.replace(/[2]/gi, "@")
let msgCifrada3= msgCifrada2.replace(/[3]/gi, "#")
let msgCifrada4= msgCifrada3.replace(/[4]/gi, "$")
let msgCifrada5= msgCifrada4.replace(/[5]/gi, "%")
let msgCifrada6= msgCifrada5.replace(/[6]/gi, "&")
let msgCifrada7= msgCifrada6.replace(/[7]/gi, "*")
let msgCifrada8= msgCifrada7.replace(/[8]/gi, "¢")
let msgCifrada9= msgCifrada8.replace(/[9]/gi, "£")
/*Repete o processo da etapa anterior, porém subistitui cada número gerado por um caractere específico*/

alert(`Mensagem codificada com sucesso!
msg: ${msgCifrada9}`)
//Retorna com a menssagem codificada para o usuário

}