let pontuacao

pontuacao = prompt("Digite seus pontos: ")

if(pontuacao <= 10){
    alert("deu ruim tente mais uma vez")
}
else if(pontuacao > 10 && pontuacao <= 100 ){
    alert("ta indo por um bom caminho")
}
else if(pontuacao > 100 && pontuacao <= 200){
    alert("supimpa! vc é um bom jogador")
}
else{
    alert("MITOUUUUU PARABENS")
}