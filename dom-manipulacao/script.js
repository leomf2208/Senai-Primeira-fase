function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log(resultado)


    let user = document.getElementById("username").value
    if(user == "Leonardo"){
        resultado.innerHTML = ("Login com Sucesso")
        // alert("login com sucesso")
    }else{
        resultado.innerHTML = ("Credenciais incorretas")
        // alert("senha incorreta")
    }
}



function mostrarMensagem(){
    alert("Mensagem")
    alert("Resto da mensagem")
}
 function executarExercicio(){
    // let nome = prompt("QUAL O SEU NOME?")
    // alert("Olá " + nome)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = "Olá " + nome

 }


//mostrarMensagem()
