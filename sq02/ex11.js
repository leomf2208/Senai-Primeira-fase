let preco 
let saldo

preco = Number(prompt("qual o preço da compra? "))
saldo = Number(prompt("qual o seu saldo ? "))

if(preco < saldo){
    alert("POSSO comprar")
}
else if(preco > saldo){
    alert("NÃO POSSO COMPRAR")
}
else{
    alert("vou ficar zerado")
}