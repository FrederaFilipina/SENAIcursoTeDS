
function rodPro() {
    let contador = 0
    let num = 1
    let result


    while(contador != 20){
        result = num % 2
        //console.log(`Resto da divisão: ${result}`)       

        if(result == 0){
            alert(`O número ${num} é Par!`)
        }       
        
        num++
//         console.log(`Resultado da adição para
// verificar se o próximo é par: ${num}`)
        contador++
        console.log(`Contagem da Repetição ${contador}`)
    }
    alert(`FIM! Obrigado ^^`)
}