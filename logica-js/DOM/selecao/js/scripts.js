      
// busca

const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown",(e)=>{
    console.log(e.key)
})


// focus é o evento o contrario é blur

inputForm.addEventListener("focus", (e)=>{
    inputForm.style.backgroundColor = "#ff0"
})

inputForm.addEventListener("blur", (e)=>{
    inputForm.style.backgroundColor = ""
})

// get e set

function searchResult(){
    const valorBusca = inputForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Voce buscou por ${valorBusca}`
    } else {
        resultadoDiv.textContent = `Por favor, insira algo na busca`
    }
}



botaoBusca.addEventListener("click",(e)=>{
    searchResult()

})


// botao de troca de tema 



const botaoTrocaTema = document.querySelector("#tema")

function alternarTema(){

    document.body.classList.toggle("escuro")
    document.body.classList.toggle("claro")
}

botaoTrocaTema.addEventListener("click",(e)=>{
    alternarTema()
})