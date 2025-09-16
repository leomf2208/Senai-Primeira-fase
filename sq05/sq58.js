let idade 

idade = prompt("Digite a sua idade : ")

if(idade < 16 ){
    alert("menores de 16 nao podem votar")
}
else if(idade >= 16 && idade <=17){
    alert("voto facultativo")
}
else if(idade >= 18 && idade <= 65){
    alert("voto obrigatorio")
}
else{
    alert("voto facultativo")
}