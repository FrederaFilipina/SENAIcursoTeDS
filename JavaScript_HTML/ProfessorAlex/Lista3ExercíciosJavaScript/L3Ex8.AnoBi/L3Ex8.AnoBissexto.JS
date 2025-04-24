/*Exercício 8 - Verificar ano bissexto

Solicite ao usuário que insira um ano.
Verifique se o ano é bissexto (um ano é bissexto se for divisível por 4, mas
não por 100, exceto se for divisível por 400) e exiba uma mensagem com o
resultado em alert .*/

let ano = Number(prompt("Digite um ano:"))
let anobi = ano.toString().slice(-2)

function bissexto(){
if(anobi == "00"){
    let biAno = ano % 400
    if(biAno === 0){
        alert(`Sim, o ano ${ano} é bissexto`)
    } else{
        alert(`O ano ${ano} NÃO é bissexto`)
    }
}
else if (anobi != "00"){
    let biAno = ano % 4
    if(biAno === 0){
        alert(`Sim, o ano ${ano} é bissexto`)
    } else {
        alert(`O ano ${ano} NÃO é bissexto`)
    }
}
}