const d = document;
const apiKey = '49d734f6b4ef19d9059a2a7fedf4b679';
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let difKelvin = 273.15;



d.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = d.getElementById('ciudadEntrada');

    if (ciudad) {
        obtenerClima(ciudad);
    } else {
        alert('Por favor, introduce una ciudad');
    }
})

function obtenerClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad.value}&appid=${apiKey}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
    const divDatosClima = d.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const ciudadPais = data.sys.country;
    const ciudadTemperatura = Math.floor(data.main.temp - difKelvin);
    const ciudadDescripcion = data.weather[0].description;

    const ciudadTitulo = d.createElement('h2');
    const ciudadTemperaturaParrafo = d.createElement('p');
    const ciudadDescripcionParrafo = d.createElement('p');

    ciudadTitulo.textContent = `Clima en ${ciudadNombre}, ${ciudadPais}`;
    ciudadTemperaturaParrafo.textContent = `${ciudadTemperatura} °C`;
    ciudadDescripcionParrafo.textContent = `${ciudadDescripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(ciudadTemperaturaParrafo);
    divDatosClima.appendChild(ciudadDescripcionParrafo);
}
