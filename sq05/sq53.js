let finaldaplaca

finaldaplaca = prompt("Qual o numero final da sua placa? Digite aqui: ")

if(finaldaplaca == 0 || finaldaplaca == 1){
    alert("Não pode rodar na segunda-feira")
}
else if(finaldaplaca == 2 || finaldaplaca == 3){
    alert("Não pode rodar na terça-feira")
}
else if(finaldaplaca == 4 || finaldaplaca == 5){
    alert("Não pode rodar na quarta-feira")
}
else if(finaldaplaca == 6 || finaldaplaca == 7){
    alert("Não pode rodar na quinta-feira")
}
else{
    alert("Não pode rodar na sexta-feira")
}