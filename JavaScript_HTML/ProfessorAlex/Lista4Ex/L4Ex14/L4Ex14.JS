
let cliques = 0

function rodPro(){
    cliques++
    console.log(cliques)
}
setTimeout(function(){
    document.getElementById("botaoEm5s").style.display = "block"
}, 5000)

function medidorAnsiedade(){
    alert(`Você clicou ${cliques}
vezes no botão!`)
}

