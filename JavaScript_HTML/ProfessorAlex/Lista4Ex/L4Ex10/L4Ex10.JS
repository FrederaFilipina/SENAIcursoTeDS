
let max = 10
let min = 1
let numAle = Math.round(Math.random() * (max - min) + min)
console.log(`número gerado aleatóriamente ${numAle}`)



function rodPro(){
    let parOuImp = prompt(`E ai....
Par ou Ímpar:`) 
    let parOuImpmine = parOuImp.toLowerCase()
    console.log(parOuImp)
    let num = Number(prompt(`Digite um número
entre 1 e 10`))
    let numPar = (numAle + num) % 2
    console.log(`Resultado da divisão para ver se é ar ${numPar}`)

if (numPar == 0 && parOuImpmine == "par"){
    alert(`Deu par, você venceu!`)
    }
    else if(numPar != 0 && parOuImpmine == "ímpar") {
        alert(`Deu ímpar, você ganhou!`)
    }
    else{
        alert(`Você Perdeu!`)
    }
}