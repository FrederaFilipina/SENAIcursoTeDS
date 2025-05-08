/* Criar um programa para programar para transformar um número
decimal em binário e vice versa */

let dividendo = prompt(`Digite um valor a ser convertido para um número binário:`)
//let dividendo = 15
let numBi = []
let divisor = 2
//let quociente //?> Dá para subistiruir por: dividendo = dividendo / divisor
let numquociente
let resto



while(dividendo != 1){
    dividendo = parseInt(dividendo / divisor)
    console.log(`Valo do Quociente ${dividendo}`)
    //dividendo = quociente
    resto = dividendo % divisor
    console.log(`Valo do resto ${resto}`)
    numBi.unshift(resto)
}
numBi.unshift(1)
alert(numBi)