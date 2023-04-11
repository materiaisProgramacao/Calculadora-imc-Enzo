function dividir() {
   
    let span = document.getElementById("spanId");

    let peso = document.getElementById("peso").value;

    let altura = document.getElementById("altura").value;

    resultado = peso/altura** 2;

 span.textContent = Math.round(resultado) 

}
