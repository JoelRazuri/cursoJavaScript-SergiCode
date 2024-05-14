const d = document;

let numeroAzar = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = d.getElementById("numeroEntrada");
let mensaje = d.getElementById("mensaje");

console.log(numeroAzar);

function chequearResultado() {
    let numeroIngresado = parseInt(numeroEntrada.value);
    
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor, introduce un número entre 1 y 100";
        return;
    }
    
    if (numeroIngresado == numeroAzar) {
        mensaje.textContent = "¡Enhorabuena, has acertado!";
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
    } else if (numeroIngresado > numeroAzar) {
        mensaje.textContent = "El número es demasiado alto";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "El número es demasiado bajo";
        mensaje.style.color = "red";
    }
}