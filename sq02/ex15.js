let peso
let altura 
let imc

peso = Number(prompt("digite seu peso....seu gordo"))
altura = Number(prompt("digite sua altura..."))

imc = peso/(altura**2)

alert(`seu indice é de ${imc}`)

if(imc <= 18.5){
    alert("baixo peso")
}
else if(imc > 18.5 && imc <= 24.9){
    alert("peso normal")
}
else if(imc >= 25 && imc <=29.9){
    alert("sobrepeso")
}
else if(imc >= 30){
    alert("obesidade")
}
else{
    alert("invalido")
}

