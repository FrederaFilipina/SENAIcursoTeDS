/*Calendário das 12 Casas do Zodíaco

Áries   21/03 até 19/04     Libra         23/09 até 22/10
Touro   20/04 até 20/05     Escorpião     23/10 até 21/11
Gêmeos  21/05 até 20/06     Sagitário     22/11 até 21/12
Câncer  21/06 até 22/07     Capricórnio   22/12 até 20/01
Leão    23/07 até 22/08     Aquário       21/01 até 19/02
Virgem  23/08 até 22/09     Peixes        20/02 até 21/03 */

let max = 12
let min = 1
let msgNum = Math.round((Math.random() * (max - min) + min))

if (msgNum == 1) {
    msgSigno = `Repense o uso dos seus recursos e organize as contas. Inicie uma poupança ou mude hábitos de consumo.
Um plano de negócio pode sair do papel. Pequenas mudanças trarão resultados duradouros. Aproveite as próximas quatro semanas para resolver sua vida financeira!`
}
if (msgNum == 2) {
    msgSigno = `Recriar o projeto de vida e concretizar as mudanças desejadas na sua carreira, na casa e na vida familiar.
Nas próximas semanas iluminarão caminhos de maior realização pessoal e favorecerão recomeços. Conte com suporte de amizades e de um novo grupo.`
}
if (msgNum == 3) {
    msgSigno = `Aproveite para silenciar o barulho de fora e escutar o que vem de dentro. A Luz da lua iluminará um campo mais sutil, pedindo pausa, cura e reconexão.
Meditação, banho de ervas ou terapias farão diferença. Um sonho pode trazer uma revelação e acalmar o coração. Deixe as redes de lado e aumente a sintonia com sua força interior.`
}
if (msgNum == 4) {
    msgSigno = `O céu de hoje favorece alianças sólidas e amizades. A lua incentivará conexões duradouras, parcerias profissionais e soma de forças.
Aceite convites que estimulem sua mente e ampliem os horizontes. Entrar um grupo será revigorante. Aproveite as próximas quatro semanas para ampliar relações e fortalecer sua rede.`
}
if (msgNum == 5) {
    msgSigno = `A Lua favorece a carreira e traz um convite para renovar sua presença profissional.
Comece um portfólio, revise seu currículo, pesquise áreas novas ou assuma uma posição de maior destaque e poder.
Pequenas atitudes terão impacto lá na frente. Cuidar da sua imagem pública será fundamental. Invista no seu futuro. Sucesso!`
}
if (msgNum == 6) {
    msgSigno = `A Lua incentivará viagens, estudos e poderá mudar a forma como você enxerga o mundo. 
Aproveite as próximas quatro semanas para fazer um curso ou participar de um evento relevante, aumentar a exposição e brilhar publicamente.
Será uma fase positiva para dar um salto na carreira e ampliar seu prestígio. Poder de influência em alta!`
}
if (msgNum == 7) {
    msgSigno = `A Lua iluminará questões emocionais e será um convite a transformações.
Aproveite as próximas quatro semanas para mudar comportamentos e dar um sentido maior à vida.
Temas como herança, finanças compartilhadas, dívidas ou seguros poderão ganhar novo rumo.
Encontre prazer nas atividades cotidianas. Poder em alta!`
}
if (msgNum == 8) {
    msgSigno = `Renove acordos, inicie parcerias ou comece uma fase mais gostosa e estável no casamento nesta Lua.
As próximas quatro semanas favorecerão associações e planos de longo prazo na vida íntima.
Aproveite este período para transformar antigos padrões emocionais e tomar decisões sobre o futuro a dois com mais clareza e segurança.`
}
if (msgNum == 9) {
    msgSigno = `Um novo lifestyle começará com as escolhas de hoje. A Lua incentivará cuidados de saúde, corporais e reformulação da rotina.
Elimine excessos e assuma novos hábitos. As próximas quatro semanas serão produtivas e reestruturadoras.
Inicie um projeto de trabalho ou tratamento médico e resolva assuntos práticos.`
}
if (msgNum == 10) {
    msgSigno = `O céu inspirará projetos criativos, prazeres diferentes e o amor numa dimensão maior.
A Lua fortalecerá a autoconfiança e revelará seus talentos. Aproveite as próximas quatro semanas para mudar padrões e reinventar a vida.
Valerá resgatar um hobbie, iniciar uma atividade artística ou desenhar um projeto a dois. Paixão em alta!`
}
if (msgNum == 11) {
    msgSigno = `Aproveite para cuidar da casa, mudar móveis de lugar ou plantar ervas na cozinha, curtir momentos carinhosos em família e iniciar pequenas reformas, internas e externas.
A Lua fortalecerá suas raízes e a autoestima. Valerá também eliminar pendências do passado. As próximas quatro semanas trarão conforto e segurança.`
}
if (msgNum == 12) {
    msgSigno = `A Lua inspirará palavras carinhosas e incentivará o diálogo com irmãos e pessoas próximas, além de trazer reflexões importantes e esclarecer dúvidas.
Aproveite as próximas quatro semanas para encontrar maneiras de se expressar, as comunicações estarão abertas. Você poderá firmar acordos e contratos com mais facilidade.`
}
//Sorteio das mensagens a serem anexadas a cada signo

function rodPro() {
    let signoVrf = prompt(`Olá, tudo bem?

Você sabe de qual Casa do Zodiaco é a sua Costelação?
(sim / não)`)
    //Verificando por qual caminho o código será rodado

    if (signoVrf == `sim`) {
        let casaSigno = Number(prompt(`
    01 - Áries              07 - Libra
    02 - Touro             08 - Escorpião
    03 - Gêmeos         09 - Sagitário
    04 - Câncer           10 - Capricórnio
    05 - Leão               11 - Aquário
    06 - Virgem           12 - Peixes

    Informe apenas o Número do seu signo:`))

        if (casaSigno == 1) {
            alert(`Hoje para o signo de Áries:

${msgSigno}`)
        }
        if (casaSigno == 2) {
            alert(`Hoje para o signo de Touro:

${msgSigno}`)
        }
        if (casaSigno == 3) {
            alert(`Hoje para o signo de Gêmeos:

${msgSigno}`)
        }
        if (casaSigno == 4) {
            alert(`Hoje para o signo de Câncer:

${msgSigno}`)
        }
        if (casaSigno == 5) {
            alert(`Hoje para o signo de Leão:

${msgSigno}`)
        }
        if (casaSigno == 6) {
            alert(`Hoje para o signo de Virgem:

${msgSigno}`)
        }
        if (casaSigno == 7) {
            alert(`Hoje para o signo de Libra:

${msgSigno}`)
        }
        if (casaSigno == 8) {
            alert(`Hoje para o signo de Escorpião:

${msgSigno}`)
        }
        if (casaSigno == 9) {
            alert(`Hoje para o signo de Sagitário:

${msgSigno}`)
        }
        if (casaSigno == 10) {
            alert(`Hoje para o signo de Capricórnio:

${msgSigno}`)
        }
        if (casaSigno == 11) {
            alert(`Hoje para o signo de Aquário:

${msgSigno}`)
        }
        if (casaSigno == 12) {
            alert(`Hoje para o signo de Peixes:

${msgSigno}`)
        }

    } else {
        let dia = Number(prompt(`Digite o Dia em que nasceu:`))
        let mes = Number(prompt(`Digite o Número do mês
em que nasceu:`))

        if (mes == 3 && 21 <= dia || mes == 4 && dia <= 19) {
            alert(`A sua casa é regida pela costelação de Áries
e guardada pelo Cavaleiro de Ouro: Mu

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 1
        }
        else if (mes == 4 && 20 <= dia || mes == 5 && dia <= 20) {
            alert(`A sua casa é regida pela costelação de Touro
e guardada pelo Cavaleiro de Ouro: Aldebarã

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 2
        }
        else if (mes == 5 && 21 <= dia || mes == 6 && dia <= 20) {
            alert(`A sua casa é regida pela costelação de Gêmeos
e guardada pelo Cavaleiro de Ouro: Saga

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 3
        }
        else if (mes == 6 && 21 <= dia || mes == 7 && dia <= 22) {
            alert(`A sua casa é regida pela costelação de Câncer
e guardada pelo Cavaleiro de Ouro: Máscara da Morte

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 4
        }
        else if (mes == 7 && 23 <= dia || mes == 8 && dia <= 22) {
            alert(`A sua casa é regida pela costelação de Leão
e guardada pelo Cavaleiro de Ouro: Aiolia

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 5
        }
        else if (mes == 8 && 23 <= dia || mes == 9 && dia <= 22) {
            alert(`A sua casa é regida pela costelação de Virgem
e guardada pelo Cavaleiro de Ouro: Shaka

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 6
        }
        else if (mes == 9 && 23 <= dia || mes == 10 && dia <= 22) {
            alert(`A sua casa é regida pela costelação de Libra
e guardada pelo Cavaleiro de Ouro: O Mestre Ancião Dohko

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 7
        }
        else if (mes == 10 && 23 <= dia || mes == 11 && dia <= 21) {
            alert(`A sua casa é regida pela costelação de Escorpião
e guardada pelo Cavaleiro de Ouro: Milo

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 8
        }
        else if (mes == 11 && 22 <= dia || mes == 12 && dia <= 21) {
            alert(`A sua casa é regida pela costelação de Sagitário
e guardada pelo Cavaleiro de Ouro: Aiolos

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 9
        }
        else if (mes == 12 && 22 <= dia || mes == 1 && dia <= 20) {
            alert(`A sua casa é regida pela costelação de Capricórnio
e guardada pelo Cavaleiro de Ouro: Shura

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 10
        }
        else if (mes == 1 && 21 <= dia || mes == 2 && dia <= 19) {
            alert(`A sua casa é regida pela costelação de Aquário
e guardada pelo Cavaleiro de Ouro: Camus

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 11
        }
        else if (mes == 2 && 20 <= dia || mes == 3 && dia <= 21) {
            alert(`A sua casa é regida pela costelação de Peixes
e guardada pelo Cavaleiro de Ouro: Afrodite

E a mensagem de hoje é:

${msgSigno}`)
            casaSigno = 12
        }
    }
}