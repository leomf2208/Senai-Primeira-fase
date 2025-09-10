programa {
  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media
    nota1 = 7
    nota2 = 5
    nota3 = 3.5
    media = (nota1 + nota2 + nota3) / 3
    se(media >= 7){
      escreva("aprovado")
    } senao{escreva("repovado")}
  }
}
