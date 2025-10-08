
const numeros = [3,5,8,10]

const numerosMaioresQueCinco = numeros.filter(valor => valor > 5)

console.log(numerosMaioresQueCinco)

const numerosPares = numeros.filter(valor => valor % 2 === 0)

console.log(numerosPares)

const numerosImpares = numeros.filter(valor => valor % 2 !== 0)

console.log(numerosImpares)

const usuarios = [
    {nome:"joao", idade: 32},
    {nome:"maria", idade: 15},
    {nome:"pedro", idade: 21}
]

const usuariosMenoresDeIdade = usuarios.filter(usuario => usuario.idade<18)

console.log(usuariosMenoresDeIdade)

