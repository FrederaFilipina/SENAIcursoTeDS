
let max = 100
let min = 1
let numAle = Math.round(Math.random() * (max - min) + min)
console.log(numAle)

function rodPro() {

    let numDig = Number(prompt(`Digite um valor entre ${min} e ${max}`))

    while (numAle != numDig) {
        numDig = Number(prompt(`Digite um valor entre ${max} e ${min}`))
    }
    if (numAle == numDig) {
        alert(`você acertou`)
    }
}