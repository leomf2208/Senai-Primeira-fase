let ano 

ano = Number(prompt("Digite o ano e vamos ver se é bissexto"))

// se ele for divisível por 4, com exceção de anos centenários que terminam em 00, os quais só são bissextos se forem divisíveis por 400

// Verifica se o ano é bissexto
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
  alert(ano + " é um ano bissexto.");
} else {
  alert(ano + " não é um ano bissexto.");
}