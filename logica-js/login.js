const prompt = require("prompt-sync")()

const usuario = prompt("Digite o login: ")
const senha = prompt("Digite a senha: ")

if(usuario == "admin" && senha == "12345"){
    console.log("LOGIN REALIZADO")
}
else if(usuario == "admin" && senha != "12345"){
    console.log("USUARIO CORRETO, SENHA ERRADA")
}
else if(usuario != "admin" && senha == "12345"){
    console.log("USUARIO ERRADO, SENHA CORRETA")
}
else{
    console.log("ACESSO NEGADO TENTE NOVAMENTE")
}

