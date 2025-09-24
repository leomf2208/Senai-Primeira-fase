const prompt = require("prompt-sync")()

const idade = parseFloat(prompt("Digite a idade: "))
const carteira = prompt("TEM CNH: S para sim e N para não? ").toUpperCase();

if(idade >= 18 && carteira == "S" ){
    console.log(`o cidadão tem ${idade} anos, e é de MAIOR de idade e PODE DIRIGIR.`)
}
else if(idade >= 18 && carteira == "N"){
    console.log(`o cidadão tem ${idade} anos, e é de MAIOR de idade e NÂO PODE DIRIGIR.`)
}       
else{
    console.log(`o cidadão tem ${idade} anos, e é de MENOR e NÂO PODE DIRIGIR.`)
}


