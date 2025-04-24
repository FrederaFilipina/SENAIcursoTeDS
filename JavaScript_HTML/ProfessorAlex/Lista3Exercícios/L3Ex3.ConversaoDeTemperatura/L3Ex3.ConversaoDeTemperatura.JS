/* Exercício 3 - Conversão de Temperatura (Celsius para Fahrenheit)

Solicite ao usuário que insira uma temperatura em Celsius.
Converta essa temperatura para Fahrenheit (F = C × 9/5 + 32).
Exiba o resultado em uma mensagem de alert.*/

function convTempF(){
    let tempAtual = Number(prompt(`Quantos graus Célcios está hoje?`))

    let tempF = ((tempAtual * (9/5)) + 32)
    alert(`${tempAtual}°C equivale a ${tempF}°F`)
}

function convTempC(){
    let tempAtual = Number(prompt(`Quantos graus Fahrenheit está hoje?`))
    let tempC = (5/9) * (tempAtual-32)
    alert(`${tempAtual}°F equivale a ${tempC}°C`)
}
