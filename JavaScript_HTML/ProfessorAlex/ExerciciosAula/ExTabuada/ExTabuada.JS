let multiplicador = 1

while (multiplicador <= 10) {
    let multiplicando = 1

    while (multiplicando <= 10) {
        let resultado = multiplicador * multiplicando

        alert(`Taboada do ${multiplicador}
${multiplicador} x ${multiplicando} = ${resultado}`)
        multiplicando++
    }
    multiplicador++
} alert(`FIM!`)