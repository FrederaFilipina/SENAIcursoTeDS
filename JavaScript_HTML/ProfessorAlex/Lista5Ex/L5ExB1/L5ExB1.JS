let numI = 0
let cCi = 0
let cCf = 10
let soma

function rodPro(){

    while(cCi <= cCf && numI != cCi){
        soma = numI + cCi
        // 0 + 1 = 1
        // 1 + 2 = 3
        //2 + 3 = 5
        alert(soma)
        cCi++
    }
    numI++
    alert(`FIM! Obrigado`)
}