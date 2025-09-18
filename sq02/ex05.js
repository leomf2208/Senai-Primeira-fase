let numeroA
let numeroB
let operacao
let resultado

numeroA = Number(prompt("Digite o numero A "))
numeroB = Number(prompt("Digite o numero B "))
operacao = prompt("Qual a operação a ser realizada +, -, * e /: ")

if(operacao == "+"){
    resultado = (numeroA + numeroB)
    alert(`${resultado}`)
}
else if(operacao == "-"){
    resultado = (numeroA - numeroB)
    alert(`${resultado}`)
}
else if(operacao == "*"){
    resultado = (numeroA * numeroB)
    alert(`${resultado}`)
}
else if(operacao == "/"){
    resultado = (numeroA / numeroB)
    alert(`${resultado}`)
}
else{
    alert("invalido")
}