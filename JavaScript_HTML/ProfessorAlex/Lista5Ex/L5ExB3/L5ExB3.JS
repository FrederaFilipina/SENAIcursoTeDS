
let cCi = 1
let cCf = 50
let numPar = 0

function rodPro(){
    while(cCi <= cCf){
        let resto = cCi % 2
        if(resto == 0){
            console.log(cCi)
            numPar++
            alert(`${numPar}`)
        }
        cCi++
    }
    alert(`FIM! Obrigado ^^`)

}