/* Criar um programa para programar para transformar um número
decimal em binário e vice versa */

function DecBi(){
    let dividendo = prompt(`Digite um valor a ser convertido para um número binário:`)
    let biNum = []
    let divisor = 2
    let resto
    
    while(dividendo != 1){
        resto = (dividendo % divisor)
        biNum.unshift(`${resto}`) 
        dividendo = parseInt(dividendo / divisor)
    }
    biNum.unshift(`1`)
    alert(biNum.join(""))
}

let numBi = []

