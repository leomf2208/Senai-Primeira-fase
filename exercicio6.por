programa {
  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia
    nota1 = 7
    nota2 = 5
    nota3 = 10
    media = (nota1 + nota2 + nota3) / 3
    frequencia = 0.8
    escreva("A MEDIA FOI:")
    escreva(media)
    escreva("\n")
    se(media >= 7 e frequencia >= 0.7){
      escreva("aprovado")
    } senao{escreva("repovado")}
  }
}
