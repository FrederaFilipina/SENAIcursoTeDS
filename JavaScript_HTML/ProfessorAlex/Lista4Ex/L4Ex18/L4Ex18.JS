
function gerarCaracteres() {
    const caracteres = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789` 
    const numAle = Math.round(Math.random() * caracteres.length)

    return caracteres.charAt(numAle)
}

function rodPro(){
    let numCract = Number(prompt(`Quantos caracteres você quer que sua senha tenha?`))
    let senha = ''

    while(numCract > 0){
        senha = senha + gerarCaracteres()
        numCract--
    }
    alert(`Sua senha é: ${senha}`)
}