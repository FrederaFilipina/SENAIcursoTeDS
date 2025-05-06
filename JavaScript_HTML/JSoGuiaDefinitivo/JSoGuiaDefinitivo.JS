let texto = prompt(`Digite um valor`)
let num = Number(prompt(`Digite o mesmo valor`))

console.log(typeof(texto))
console.log(typeof(num))

if (texto == num){
    console.log(texto + num)
}

if(texto === num){
    console.log(`2 são iguais`)
}