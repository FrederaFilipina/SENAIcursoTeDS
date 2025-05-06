
function rodPro() {

    let pergunta = [`1) A frase "Penso, logo existo!", foi dita por quem?
    a) Platão                   b) Galileu
    c) Descartes              d) Sócrates

Digite apenas a letra da resposta:`,
`2) Quem foi a primeira pessoa a viajar no Espaço?
    a) Yuri Gagarian        b) Buzz Aldrin
    c) Neil Armstrong     d) Marcos Pontes

Digite apenas a letra da resposta:`,
`3) Em qual país se localiza o Machu Picchu?
    a) Colômbia             b) Bolívia
    c) Equador               d) Peru

Digite apenas a letra da resposta:`]

    let num = 0
    let alt
    let resp = []
   
        while (num <= 2) {
            alt = prompt(pergunta[num])
            if (pergunta[0] && alt == `c` || pergunta[1] && alt == `a` || pergunta[2] && alt == `d`) {
                alt = 1
            } else {
                alt = 0
            }
            resp.push(alt)            
            num++
        }
      
    let ttl = resp[0] + resp[1] + resp[2]
    alert(`Você acertou ${ttl} de 03`)
}
