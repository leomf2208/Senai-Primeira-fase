// setTimeout(()=>{
//     console.log("execute depois de 3 segundos")

// },3000)

function saudacao(){
    console.log("ola")
}


function imprimiDado(){
    console.log("imprimir")
}

setTimeout(imprimiDado,5000)
saudacao()

function soma(){
    console.log("o resultado da soma: " + (1+4))
}

setTimeout(soma,5000)

