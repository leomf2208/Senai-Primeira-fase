let idade 

idade = prompt("Digite a sua idade NOIA, tens que votar ou nao")

if(idade >= 0 && idade < 16){
    alert("NÃO PODES VOTAR INUTIL....")
}
else if(idade >= 16 && idade < 18 ){
    alert("VOTO NAO OBRIGATORIO")
}
else if(idade >= 18 && idade <= 65){
    alert("VOCE É OBRIGATORIO VOTAR ")
}
else if(idade > 65){
    alert("VOCE NÃO É OBRIGATORIO VOTAR ")
}
else{
    alert("invalido")
}