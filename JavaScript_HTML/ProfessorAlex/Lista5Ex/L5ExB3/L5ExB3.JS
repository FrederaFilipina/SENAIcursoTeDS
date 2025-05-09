
function rodPro() {

    let cCf = 50
    let numPar = 0

    for (let cCi = 1; cCi <= cCf; cCi++) {
        let resto = cCi % 2

        if (resto == 0) {
            console.log(cCi)
            numPar++
            alert(`${numPar}`)
        }
    }
    numPar = 0
    alert(`FIM! Obrigado ^^`)

}