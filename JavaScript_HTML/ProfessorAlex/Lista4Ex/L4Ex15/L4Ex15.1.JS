
let max = 100
let min = 1
let numAle = Math.round(Math.random() * (max - min) + min)
console.log(numAle)
let contador = 1

function rodPro() {
    let numDig = Number(prompt(`Digite um valor entre ${min} e ${max}`))
    console.log(`contador1: ${contador}`)

    if (numAle == numDig) {
        alert(`TU É MUITO BOM!!!
ACERTOU NA PRIMEIRA`)

    }
    else if (numAle != numDig) {

        while (numAle != numDig && contador != 5) {
            numDig = Number(prompt(`Ok.... vou ser legal com você
e vou te dar mais ${5 - contador} tentativas`))
            contador++
            console.log(`contador2: ${contador}`)
        }

        if (numAle == numDig) {
            alert(`Opa.... você acertou!`)
        } else {
            alert(`Game Over`)
        }
        contador = 1

    }

}
