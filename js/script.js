'use strict';
const numberOfFilms = +prompt('How many films have you watched?"', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {

    let a = prompt('Tell us One of the last watched movies', ''),
        b = +prompt('Give us ur assesment', '');

    if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
        personalMovieDB.movies[a] = b;
        console.log('Success!')
    } else {
        alert('error. Write it down correctly');
        i--;
    }
};

if (personalMovieDB.count < 10) {
    alert('Переглянуто достатньо мало фільмів!')
} else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
    alert('Ви класичний глядач')
} else if (personalMovieDB.count > 30) {
    alert('Ви кіноман!')
} else {
    alert('Відбулася помилка')
};



console.log(personalMovieDB);