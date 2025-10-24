

 function calcularConsumo() {
           
    const distancia = parseFloat(document.getElementById('distancia').value);
    const combustivel = parseFloat(document.getElementById('combustivel').value);

        const consumoMedio = distancia / combustivel;
        document.getElementById('resultado').textContent = consumoMedio.toFixed(2) + " km/l";
        }

 