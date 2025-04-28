
function rodPro() {
    let nomeUsuario = prompt(`Digite apenas seu primeiro nome: `)

    let sexoNomeHeroi = prompt(`Você deseja recebr um nome:
1 - Masculino;
2 - Feminino;`)

    if (sexoNomeHeroi == 1) {
        let maxT = 3
        let minT = 1
        let titulo = Math.round((Math.random() * (maxT - minT) + minT))
        //Selecione uma das opçõs de título para o nome de super-heroi

        nomeHeroiP1 = (`O ${titulo} ${nomeUsuario}`)
        let nomeTitulo1 = nomeHeroiP1.replace(/[1]/gi, "Bravo")
        let nomeTitulo2 = nomeTitulo1.replace(/[2]/gi, "Destemido")
        let nomeTitulo3 = nomeTitulo2.replace(/[3]/gi, "Corajoso")
        alert(`Seu nome de herói é:
${nomeTitulo3}`)
    } else {
        let maxT = 3
        let minT = 1
        let titulo = Math.round((Math.random() * (maxT - minT) + minT))
        //Selecione uma das opçõs de título para o nome de super-heroi

        nomeHeroiP1 = (`A ${titulo} ${nomeUsuario}`)
        let nomeTitulo1 = nomeHeroiP1.replace(/[1]/gi, "Brava")
        let nomeTitulo2 = nomeTitulo1.replace(/[2]/gi, "Destemida")
        let nomeTitulo3 = nomeTitulo2.replace(/[3]/gi, "Corajosa")
        alert(`Seu nome de herói é:
${nomeTitulo3}`)
    }

}
