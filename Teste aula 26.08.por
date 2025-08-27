programa {

  inclua biblioteca Matematica

  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia
    escreva("Digite o nome do aluno: ")
    leia(nome)
    escreva("Qual a nota1: ")
    leia(nota1)
    escreva("Qual a nota2: ")
    leia(nota2)
    escreva("Qual a nota3: ")
    leia(nota3)
    media = (nota1 + nota2 + nota3)/3
    media = Matematica.arredondar(media,2)
   
    escreva("A media foi: " + media)
    escreva("\n")
    escreva("Qual a frequecia de 0 a 1: " )
  
    leia(frequencia)
    frequencia = frequencia * 100
    escreva("A frequencia media foi: " + frequencia + " % ")
    
    escreva("\n")
    se(media >= 7 e frequencia >= 70){
      escreva("O aluno " + nome + " foi aprovado!")
    }senao{escreva("O aluno " + nome + " foi reprovado")}
  
  }
}
