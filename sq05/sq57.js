// let dias 
// let valor
// let multas
// let desconto

// dias = Number(prompt("digete o numero de dias: "))
// desconto = Number(prompt("Voce tem envolvimento social 10% ou voce dirigine na UBER 15%"))
// multas = Number(prompt("Quanto foi a multa: "))

// if (dias <= 5){
//     valor = (dias * 100.00)*((100.00 - desconto)/100) + multas
//     alert(`o valor final foi de R$ ${valor.toFixed(2)}`)
// }
// else if(dias > 6 && dias <= 10){
//     valor = (dias * 90.00)*((100.00 - desconto)/100) + multas
//     alert(`o valor final foi de R$ ${valor.toFixed(2)}`)
// }
// else {
//     valor = (dias * 80.00)*((100.00 - desconto)/100) + multas
//     alert(`o valor final foi de R$ ${valor.toFixed(2)}`)
// }


let dias 
let valorDiario 
let totalBruto, totalLiquido
let desconto10, desconto15, multa = 150

dias = Number(prompt("quantos dias: "))
if(dias <= 5){
    valorDiaria = 100
}
else if(dias <= 10){
    valorDiaria = 90
}
else{
    valorDiaria = 80
}

totalBruto = dias*valorDiaria

console.log(totalBruto)

desconto10 = totalBruto*10/100
desconto15 = totalBruto*15/100

totalLiquido = totalBruto - (desconto10 + desconto15) + multa

alert("Numero de dias " + dias + "\nvalor por dia: R$ " + valorDiaria.toFixed(2) + "\nTotal bruto: R$ " + totalBruto.toFixed(2) + "\nDesconto especial: R$ " + desconto10.toFixed(2) + 
    "\nDesconto Convenio: R$ " + desconto15.toFixed(2) + "\nMulta: R$ " + multa.toFixed(2) + "\n===============" + "\nTotal a pagar: R$ " + totalLiquido.toFixed(2).replace(".",","))

