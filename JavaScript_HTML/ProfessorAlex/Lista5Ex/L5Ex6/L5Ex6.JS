

function rodPro() {

    let num = 0
    while(num <= 30){

        let digitos = num.toString()
        let num1 = Number(digitos.charAt(0))
        let num2 = Number(digitos.charAt(1))
        
        let resp = (num1 + num2) % 3

        if (resp == 0) {
        alert(`O número ${num} é multiplo de 3`)
        }
        num++
    }   

    alert(`FIM! Obrigado^^`)
}

