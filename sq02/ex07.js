let nota 

nota = Number(prompt("Digite a sua nota"))

if(nota >=0 && nota<=20){
    alert("Classificação E")
}
else if(nota > 20 && nota <= 40){
    alert("Classificação D")
}
else if(nota > 40 && nota <=60){
    alert("Classificação C")
}
else if(nota > 60 && nota <=80){
    alert("Classificação B")
}
else if(nota > 80 && nota <=100){
    alert("Classificação A")
}
else{
    alert("nota invalida")
}