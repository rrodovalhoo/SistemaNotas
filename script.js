document.getElementById('btnverificar').addEventListener('click', function() {
    
    let textoDigitado = document.getElementById('nota').value;
    let nota = parseFloat(textoDigitado);

   
    if (textoDigitado === "" || nota < 0 || nota > 10) {
        document.getElementById('resultado').value = "Nota Inválida";
    } 
    else if (nota >= 7) {
        document.getElementById('resultado').value = "Aprovado";
    } 
    else {
        document.getElementById('resultado').value = "Reprovado";
    }

});