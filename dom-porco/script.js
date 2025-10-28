function calcularPresente() {
           
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const moeda1 = parseFloat(document.getElementById('moeda1').value);
    const moeda50 = parseFloat(document.getElementById('moeda50').value);
    const moeda25 = parseFloat(document.getElementById('moeda25').value);
    const moeda10 = parseFloat(document.getElementById('moeda10').value);
    const moeda05 = parseFloat(document.getElementById('moeda05').value);

        const consumoPresente = (moeda1*1.00 + moeda50*0.5 + moeda25*0.25 + moeda10*0.10 + moeda05*0.05);
        document.getElementById('valorPresente').innerHTML = "O valor total do presente R$: " + valorCompra.toFixed(2)+ "." ;
        document.getElementById('resultado').innerHTML = "O valor total que tenho R$: " + consumoPresente.toFixed(2)+ "." ;

    if (consumoPresente >= valorCompra) {
        resultado.innerHTML += "<br><br> 🎁 Você tem dinheiro suficiente para comprar o presente!";
    } else{
        resultado.innerHTML += "<br><br> Sou pobre não tenho diheiro para o 🎁!";
    }
}
