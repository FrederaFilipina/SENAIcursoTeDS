/* Criar um programa para programar para transformar um número
decimal em binário e vice versa */

let dividendo = prompt(`Digite um valor a ser convertido para um número binário:`)
let numBi = []
let divisor = 2
let resto


while(dividendo != 1){
    console.log(`valor do dividendo antes da divisão do resto: ${dividendo}`)
    resto =parseInt(dividendo % divisor)
    console.log(`Valo do resto ${resto}`)
    numBi.unshift(`${resto}`)

    console.log(`Valor do dividendo antes da divisão: ${dividendo}`)
    dividendo = parseInt(dividendo / divisor)
    console.log(`Valo do Quociente ${dividendo}`)
}
numBi.unshift(`1`)

alert(numBi.join(""))
