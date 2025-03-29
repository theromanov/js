'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('How many films have you watched?"', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)); {
            personalMovieDB.count = +prompt('How many films have you watched?"', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {

            let a = prompt('Tell us One of the last watched movies', '').trim(),
                b = prompt('Give us ur assesment', '');

            if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
                personalMovieDB.movies[a] = b;
                console.log('Success!')
            } else {
                alert('error. Write it down correctly');
                i--;
            }
        };
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Переглянуто достатньо мало фільмів!')
        } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
            alert('Ви класичний глядач')
        } else if (personalMovieDB.count > 30) {
            alert('Ви кіноман!')
        } else {
            alert('Відбулася помилка')
        };
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt('What is your favorite genre?', '');

            // if (genre === '' || genre == null) {
            //     console.log('Ви ввели некоректні дані або зовсім не ввели їх');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Write your favorite ganres using coma?`, '').toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Ви ввели некоректні дані або зовсім не ввели їх');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        })
    },
};
