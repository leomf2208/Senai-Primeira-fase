let idadeCachorro 
let idadeHumana

idadeCachorro = Number(prompt("digie a idade do doguinho e vamos ver se aposentad estado: "))
idadeHumana = (idadeCachorro * 7)
alert(`${idadeHumana}`)

if(idadeHumana >= 65){
    alert("O DOUINHO ESTA APOSENTADO")
}
else{
    alert("DOGUINHO NAO ESTA APOSENTADO, TEM QUE TRABALHAR MAIS UM POUQUINHO....")
}

