// setInterval(()=>{
// console.log("executei")

// },2000)

const prompt = require(`prompt-sync`)()

let contadorInicial = Number(prompt("digite um valor inicial : "))
let contadorFinal = Number(prompt("digite o valor final: "))

let inervalo = setInterval(() => {
    console.log(contadorInicial)
    contadorInicial ++
    if(contadorInicial === contadorFinal){ //>= esta certo e aparece os mumero
        clearInterval(intervalo)
    }
}, 1000)
