document.addEventListener('DOMContentLoaded', function() {
        function renderMovies(movieArray) {
            movieHTML = movieArray.map(function(currentMovie) {
                return `
                <div class="card" style="width: 14rem">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                <p class="card-title">${currentMovie.Title}<span>${currentMovie.Year}</span></p>
                <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add to watchlist</a>
                </div>
                </div>
           `
            })
            return movieHTML.join('');
        }
        //search by name function
        var content = document.getElementById('movieContainer')
        document.getElementById('search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            var searchString = document.getElementById('search-bar').value;
            var urlEncodedSearchString = encodeURIComponent(searchString);
            axios.get('http://www.omdbapi.com/?apikey=169c4896&s=' + urlEncodedSearchString)
                .then(function(response) {
                    content.innerHTML = renderMovies(response.data.Search);
                })
        })
    })
    // store to local storage temporarly aand save to watch list page
function saveToWatchlist(imdbID) {
    var searchString = document.getElementById('search-bar').value;
    var urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get('http://www.omdbapi.com/?apikey=169c4896&s=' + urlEncodedSearchString)
        .then(function(response) {
            var movie = response.data.Search.find(function(currentMovie) {
                    return currentMovie.imdbID == imdbID;
                })
                // saveToWatchlist(imdbID)
            var watchlistJSON = localStorage.getItem('watchlist');
            console.log(watchlistJSON)
            var watchlist = JSON.parse(watchlistJSON);
            if (watchlist == null) {
                watchlist = [];
            }
            watchlist.push(movie)
            watchlistJSON = JSON.stringify(watchlist);
            localStorage.setItem('watchlist', watchlistJSON);
        });
}