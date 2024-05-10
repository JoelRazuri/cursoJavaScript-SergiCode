let d = document

function agregar(valor) {
    d.getElementById('pantalla').value += valor;
}

function borrar() {
    d.getElementById('pantalla').value = "";
}

function calcular() {
    const valorPantalla = d.getElementById('pantalla').value;
    const resultado = eval(valorPantalla)
    d.getElementById('pantalla').value = resultado;
}
