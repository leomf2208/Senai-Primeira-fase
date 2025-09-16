let genero
let altura
let pesoIdeal


genero = prompt("Digite seu genero 1 para feminino e 2 para masculino: ")

altura = Number(prompt("Digite a sua altura em metros: "))


if(genero == 1){
    pesoIdeal = (72.7 * altura) - 58;
    alert(" seu peso ideal " + pesoIdeal)
    alert("feminino")
}
else if(genero == 2){
    pesoIdeal = (62.1 * altura) - 44.7
    alert(" seu peso ideal " + pesoIdeal)
    alert("masculino")
}
else{
    alert("genero invalido: digite 1 para feminino ou 2 para masculino")
}