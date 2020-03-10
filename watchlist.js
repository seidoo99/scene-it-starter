document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        movieHTML = movieArray.map(function(currentMovie) {
            return `
                <div class="card" style="width: 14rem">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                <p class="card-title">${currentMovie.Title}<span>${currentMovie.Year}</span></p>
                </div>
                </div>
           `
        })
        return movieHTML.join('');
    }
    var content = document.getElementById('movieContainer');
    content.innerHTML = renderMovies(JSON.parse(localStorage.getItem('watchlist')));
});