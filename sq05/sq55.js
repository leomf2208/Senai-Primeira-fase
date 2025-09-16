let nota1
let nota2
let media

nota1 = Number(prompt("Digite a sua priemira nota : "))
nota2 = Number(prompt("Digite a sua segunda nota : "))

media = (nota1 + nota2)/2

if(media >= 7){
    alert("Sua media é" + " " +  media  + " " + "voce passou de ano") 
}
else{
    alert("sua media é: " + " " + media + " " + "voce nao passou seu ano")
}