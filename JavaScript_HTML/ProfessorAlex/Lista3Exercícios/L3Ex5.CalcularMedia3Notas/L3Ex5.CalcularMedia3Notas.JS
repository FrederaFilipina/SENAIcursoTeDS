/*5. Exercício 5 - Calcular a média de três notas
Peça ao usuário para inserir três notas de um aluno.
Calcule a média das notas e exiba o resultado em um alert .*/

let nota1 = Number(prompt(`Digite o valor da nota 1:`))
let nota2 = Number(prompt(`Digite o valor da nota 2:`))
let nota3 = Number(prompt(`Digite o valor da nota 3:`))


function mediaNota(){
    let mediaNota = (nota1 + nota2 + nota3)/3
    alert(`A média das notas ${nota1}, ${nota2} e ${nota3}
é: ${mediaNota}`)
}
    