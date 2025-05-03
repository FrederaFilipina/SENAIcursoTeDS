
function rodPro() {

    let p1 = `1) A frase "Penso, logo existo!", foi dita por quem?
    a) Platão                   b) Galileu
    c) Descartes              d) Sócrates

Digite apenas a letra da resposta:`

    let p2 = `2) Quem foi a primeira pessoa a viajar no Espaço?
    a) Yuri Gagarian        b) Buzz Aldrin
    c) Neil Armstrong     d) Marcos Pontes

Digite apenas a letra da resposta:`

    let p3 = `3) Em qual país se localiza o Machu Picchu?
    a) Colômbia             b) Bolívia
    c) Equador               d) Peru

Digite apenas a letra da resposta:`
    let p

    let num = 1
    let alt
    let resp = []

   
        while (num <= 3) {
            if (num == 1) {
                p = p1
            }
            else if (num == 2) {
                p = p2
            }
            else if (num == 3) {
                p = p3
            }

            alt = prompt(p)
            if (p == p1 && alt == `c` || p == p2 && alt == `a` || p == p3 && alt == `d`) {
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
