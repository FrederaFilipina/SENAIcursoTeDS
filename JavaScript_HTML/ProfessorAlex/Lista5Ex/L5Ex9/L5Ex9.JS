

function rodPro(){
    let cC = 1
    let numV = 15

    while(cC <= numV){
        let resto = cC % 2

        if(resto == 0){
            alert(`O número ${cC} é Par`)
        } else{
            alert(`O número ${cC} é Ímpar`)
        }
        cC++
    }
    alert(`FIM! Obrigado`)
} 