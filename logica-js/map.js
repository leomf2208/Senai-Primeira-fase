
// const numeros = [3,5,8,10]

// const valoresDobrados = numeros.map((valor) => valor*2)
// console.log(numeros)
// console.log(valoresDobrados)

const usuarios = [
    {nome:"joao", idade: 32},
    {nome:"maria", idade: 15},
    {nome:"pedro", idade: 21}
]


const nomesUsuarios = usuarios.map(usuario => usuario.nome)
console.log(nomesUsuarios)

for (let nomeUsuario of nomesUsuarios){
    console.log(nomeUsuario)
}

const idadesUsuarios = usuarios.map(usuario => usuario.idade)
console.log(idadesUsuarios)

for (let idadeUsuario of idadesUsuarios){
    console.log(idadeUsuario)
}



