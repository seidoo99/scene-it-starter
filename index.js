// function renderMovies(movies) {

//     MoviesHtml = movies.map((movie) => {
//         return `
//         <div class="card" style="width: 14rem">
//         <img class="card-img-top" src="${movie.Poster}" alt="Card image cap">
//         <div class="card-body">
//         <p class="card-title">${movie.Title}<span>${movie.Year}</span></p>
//         <a href="#" class="btn btn-primary" onclick=add()>Add</a>
//         </div>
//         </div>
//    `
//     }).join("");

//     return MoviesHtml

// }
// var content = document.getElementById('movieContainer')
// htmlsearch = document.getElementById('search-form')
// htmlsearch.addEventListener('submit', function(e) {
//     e.preventDefault()
//         // console.log(e)
//     var searchString = e.target.elements[0].value.toUpperCase()
//         // console.log(searchString)
//     var returnSearch = search(searchString, movieData)
//         // console.log(returnSearch)
//     content.innerHTML = renderMovies(returnSearch);

// })

// function search(nameKey, movieData) {
//     var newArray = [];
//     for (var i = 0; i < movieData.length; i++) {
//         var movieTitle = movieData[i].Title.toUpperCase()
//         if (movieTitle.includes(nameKey)) {
//             newArray.push(movieData[i])

//         }
//     }
//     return newArray
// }

// function movies() {
//     var content = document.getElementById('movieContainer')
//     content.innerHTML = renderMovies(movieData);
// }
// movies()

document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        movieHTML = movieArray.map(function(currentMovie) {
            return `
                <div class="card" style="width: 14rem">
                <img class="card-img-top" src="${currentMovie.Poster}" alt="Card image cap">
                <div class="card-body">
                <p class="card-title">${currentMovie.Title}<span>${currentMovie.Year}</span></p>
                <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
                </div>
                </div>
           `
        })
        return movieHTML.join('');
    }
    // var moviesContainer = document.getElementById("movies-container");
    // document.getElementById("search-form").addEventListener("submit", function(e) {
    //         e.preventDefault();
    //         moviesContainer.innerHTML = renderMovies(movieData);
    //     })
    var content = document.getElementById('movieContainer')
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault();
        var searchString = e.target.elements[0].value.toUpperCase()
            // console.log(searchString)
        var returnSearch = search(searchString, movieData)
            // console.log(returnSearch)
        content.innerHTML = renderMovies(returnSearch);

    })

    function search(nameKey, movieData) {
        var newArray = [];
        for (var i = 0; i < movieData.length; i++) {
            var movieTitle = movieData[i].Title.toUpperCase()
            if (movieTitle.includes(nameKey)) {
                newArray.push(movieData[i])

            }
        }
        return newArray
    }

})

function saveToWatchlist(imdbID) {

    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;

    });
    saveToWatchlist(imdbID)
    var watchlistJSON = localStorage.getItem('watchlist');
    // console.log(watchlistJSON)
    var watchlist = JSON.parse(watchlistJSON);
    if (watchLIst == null) {
        watchlist = [];
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);

}