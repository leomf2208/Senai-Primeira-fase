let numeroA
let numeroB

numeroA = prompt("digite numero A: ")

numeroB = prompt("digite numero B: ")

if(numeroA > numeroB){
    alert("numeroA é maior")
    // alert(" primeiro  ("+ numeroA +")  é maior que o segundo  ("+ numeroB +")")
}else if(numeroA < numeroB){
    alert("numeroB é maior")
}else{
    alert("numeroA e numeroB são iguais.")
}