
let cCi = 1
let cCf = 10
let num = 1

function rodPro(){
    while(cCi <= cCf){
        let soma = cCi * num
        alert(`
núm         +       últ.Res
 ${cCi}             *           ${num}          =   ${soma}`)
        num = soma                    
        cCi++
    }
    alert(`FIM!`)
} 