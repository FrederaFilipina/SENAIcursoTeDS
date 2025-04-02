/*Desenvolva um programa que determine se um triângulo
é escaleno, isósceles ou equilátero, com base nos comprimentos dos seus lados.*/
programa {
  funcao inicio() {
  inteiro alt, larg, comp

  escreva("Alt:     ") leia(alt)
  escreva("Larg:    ") leia(larg)
  escreva("Compr:   ") leia(comp)

  limpa()
  se (alt != larg e alt != comp e larg != comp) {
    escreva("Triângulo Escaleno")
  }
  se (alt == larg e alt == comp e larg == comp) {
    escreva("Triângulo Equilátero")
  }
  se (alt == larg e alt != comp ou alt == comp e alt != larg  ou larg == comp e larg != alt) {
    escreva("Triângulo Isósceles")
  }
  
  }
  }
}
