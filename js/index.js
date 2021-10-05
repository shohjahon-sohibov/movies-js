// ============================================================================================
// ====================================   movies   ===========================================
// ============================================================================================


var elMoviesList = $_('.movies');
var elMoviesTemplate = $_('#movies-card-template').content;

elMoviesList.innerHTML = '';

var renderMovies = function (movie) {
  var elNewMovie = elMoviesTemplate.cloneNode(true);

  elNewMovie.querySelector('.js-movie-img').src = `${movie.ImageURL}`;
  elNewMovie.querySelector('.js-movie-img').alt = movie.Title;
  elNewMovie.querySelector('.js-movie-title').textContent = movie.Title;
  elNewMovie.querySelector('.js-movie-year').textContent = movie.movie_year;
  elNewMovie.querySelector('.js-movie-categories').textContent = movie.Categories.split('|').join(', ');
  elNewMovie.querySelector('.js-movie-you-tube-id').textContent = `Watch trailer`;
  elNewMovie.querySelector('.js-movie-you-tube-id').href = `https://www.youtube.com/watch?v=${movie.ytid}`;

  return elNewMovie;
};

movies.forEach(function (movie) {
  elMoviesList.appendChild(renderMovies(movie));
});