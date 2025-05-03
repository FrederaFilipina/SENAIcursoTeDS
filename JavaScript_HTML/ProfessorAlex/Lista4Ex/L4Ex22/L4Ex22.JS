
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
    let p4 = 0
    let p

    let cC = 1
    let num = 1
    let alt
    let resp = []
    
    while (cC <= 3) {       
        while (cC == num) {
            p = p1
            alt = prompt(p)
            resp.push(alt)
            p1 = p2
            p2 = p3
            p3 = p4
            num++
        }
        cC++
    }

    let r1
    if (resp[0] == `c`) {
        r1 = 1
    } else {
        r1 = 0
    }

    let r2
    if (resp[1] == `a`) {
        r2 = 1
    } else {
        r2 = 0
    }

    let r3
    if (resp[2] == `d`) {
        r3 = 1
    } else {
        r3 = 0
    }

    let ttl = r1 + r2 +r3
    alert(`Você acertou ${ttl} de 03`)
}
