const d = document;

d.getElementById('searchButton').addEventListener('click', searchMovies);

let apiKey= '891ed774b150bc94289c441bb896cb2c';
let baseURL = 'https://api.themoviedb.org/3/search/movie';

function searchMovies() {
    let movieName = d.getElementById('searchInput').value;
    
    fetch(`${baseURL}?api_key=${apiKey}&query=${movieName}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    let resultContainer = d.getElementById('results');  
    
    resultContainer.innerHTML = '';

    if (movies.length === 0) {
        resultContainer.innerHTML = '<h2>No se encontraron resultados</h2>';
    } else {
        movies.forEach(movie => {
            resultContainer.innerHTML += `
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <h4>${movie.release_date}</h4>
                <p>${movie.overview}</p>
            </div>`;
        })
    }
}