/*Os números inteiros entre 1 e 100 que são divisíveis por 4 são:
4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68,
72, 76, 80, 84, 88, 92, 96, e 100.*/

function rodPro() {
    let cC = 1
    let numV = 100
    let numDv = 4

    
    while(cC <= numV){
        
        let resp = cC / numDv        

        if(Number.isInteger(resp)){
            alert(`${cC} é um número divisivel por ${numDv},
pois o quociente da sua divisão
que é: ${resp} é um número inteiro`)
        }

        cC++
    }   

    alert(`FIM! Obrigado^^`)
}

