
let max = 100
let min = 0
let numRandom = Math.random() * (max - min) + min

console.log(`Gera um valor aleatório entre o intervalo definido ${numRandom}`)
console.log(`Gera um valor aleatório entre o intervalo definido ${Math.trunc(numRandom)}
porem exclui os valores decimal`)

console.log(Math.round(numRandom))
