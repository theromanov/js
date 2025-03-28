'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = prompt('How many films have you watched?"', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)); {
        numberOfFilms = +prompt('How many films have you watched?"', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        let a = prompt('Tell us One of the last watched movies', ''),
            b = prompt('Give us ur assesment', '');

        if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('Success!')
        } else {
            alert('error. Write it down correctly');
            i--;
        }
    };
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Переглянуто достатньо мало фільмів!')
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
        alert('Ви класичний глядач')
    } else if (personalMovieDB.count > 30) {
        alert('Ви кіноман!')
    } else {
        alert('Відбулася помилка')
    };
}

detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt('What is your favorite ganre?', '');
    }
}

writeYourGenres();