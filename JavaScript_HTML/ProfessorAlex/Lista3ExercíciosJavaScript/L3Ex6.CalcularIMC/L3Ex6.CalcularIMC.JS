/*Exercício 6 - Calculadora de IMC

Solicite ao usuário que insira seu peso e altura.
Calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura²).

Exiba o resultado em um alert e classifique o IMC de acordo com os
valores:
Menos de 18,5: Abaixo do peso
Entre 18,5 e 24,9: Peso normal
Entre 25 e 29,9: Sobrepeso
30 ou mais: Obesidade*/

let altura = Number(prompt("Dígite sua altura: "))
let peso = Number(prompt("Digite seu peso: "))

function calcIMC(){
    let imc = peso / altura ** 2

    if(imc < 18.5){
        alert(`Sua altura é ${altura} e seu peso está em: ${peso} kg
calculando, seu imc está em ${Math.trunc(imc)} e isso indica que você está Abaixo do peso`)
    }

    else if(18.5 <= imc && imc <= 24.9){
        alert(`Sua altura é ${altura} e seu peso está em: ${peso} kg
calculando, seu imc está em ${Math.trunc(imc)} e isso indica que você está no Peso normal`)
    }

    else if(25 <= imc && imc <= 29.9){
        alert(`Sua altura é ${altura} e seu peso está em: ${peso} kg
calculando, seu imc está em ${Math.trunc(imc)} e isso indica que você está com Sobrepeso`)
    }
    else {
        alert(`Sua altura é ${altura} e seu peso está em: ${peso} kg
calculando, seu imc está em ${Math.trunc(imc)} e isso indica que você está Obeso`)
    }
}