const numberOfFilms = +prompt('How many films have you watched?"', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Tell us One of the last watched movies', ''),
    b = prompt('Give us ur assesment', ''),
    c = prompt('Tell us One of the last watched movies', ''),
    d = prompt('Give us ur assesment', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);