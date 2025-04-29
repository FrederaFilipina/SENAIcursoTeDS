
let max = 100
let min = 1
let numAle = Math.round(Math.random() * (max - min) + min)
console.log(numAle)
let contador = 1

function rodPro() {
    let numDig = Number(prompt(`Digite um valor entre ${min} e ${max}`))
    console.log(`contador1: ${contador}`) 

    while(numAle != numDig){        
        numDig = Number(prompt(`Digite um valor entre ${min} e ${max}`))
        contador++  
        console.log(`contador2: ${contador}`)
    }

    alert(`fim de cód`)

}