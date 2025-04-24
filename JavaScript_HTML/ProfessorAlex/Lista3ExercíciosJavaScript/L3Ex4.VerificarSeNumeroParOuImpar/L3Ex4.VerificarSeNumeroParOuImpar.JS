/*Exercício 4 - Verificar se um número é par ou ímpar

Solicite ao usuário que insira um número.
Verifique se o número é par ou ímpar e exiba uma mensagem
correspondente usando alert .*/

let numb = Number(prompt("Digite um número"))


function numero(){
    let numCal = numb % 2
    if(numCal == 0){
        alert(`O número digitado: ${numb} é PAR`)
    } else {
        alert(`O número digitado: ${numb} é ÍMPAR`)
    }
}