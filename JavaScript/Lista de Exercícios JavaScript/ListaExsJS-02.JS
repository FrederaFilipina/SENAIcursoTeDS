/*2. Dragões e Condições
História: Um guerreiro encontrou um dragão!
Se ele tiver uma espada mágica e mais de 18
anos, ele pode lutar. Se não, deve fugir.*/

let idade = Number(prompt("Qual sua idade Guerreiro? "))
let espadaMagica

if (18 < idade){
    espadaMagica = prompt("Você é portador de uma espada mágica? \n(sim/não)")
    if (espadaMagica === "sim") {
        console.log("Muito bem Guerreio, você está apto a enfrentar o Dragão!")
    } else {
        console.log("Sinto muito Guerreiro, consiga a espada mágica e volte para enfrentar o Dragão")
    }
} else {
    console.log("Sinto muito Jovem Guerreiro, volte daqui quando for mais velho!")
}

