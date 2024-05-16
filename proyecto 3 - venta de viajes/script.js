import { roma, paris, barcelona, londres } from './ciudades.js';

const d = document;

let enlaces = d.querySelectorAll("a");
const titulo = d.getElementById("titulo");
const subtitulo = d.getElementById("subtitulo");
const parrafo = d.getElementById("parrafo");

function obtenerCiudad(enlace) {
    const ciudad = {
        "Barcelona" : barcelona,
        "Roma" : roma,
        "París" : paris,
        "Londres" : londres
    };

    return ciudad[enlace];
}

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        // Remover clase 'active' de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove("active");
        })

        // Agregar clase active al enlace activo
        this.classList.add("active");
        
        // Obtener ciudad
        let ciudad = obtenerCiudad(this.textContent);

        // Mostrar ciudad
        titulo.innerHTML = ciudad.titulo;
        subtitulo.innerHTML = ciudad.subtitulo;
        parrafo.innerHTML = ciudad.parrafo;
    });
});