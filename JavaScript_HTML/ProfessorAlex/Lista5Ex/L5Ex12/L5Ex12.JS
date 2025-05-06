function rodPro() {
    let cC = 1
    let numV = 20
    let numDv = 3

    
    while(cC <= numV){
        
        let resp = cC / numDv        

        if(Number.isInteger(resp)){
            alert(`${cC} - Fizz`)
        } else{
            alert(cC)
        }

        cC++
    }   

    alert(`FIM! Obrigado^^`)
}