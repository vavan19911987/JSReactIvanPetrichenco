'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//         console.log('done');
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//
//     }
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель")
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка")
//     }
// }
// console.log(personalMovieDB);

// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// function returnNeighboringNumbers(num) {
//     let arr = [];
//     arr.push(num - 1, num, num + 1);
//     console.log(arr);
//     return arr;
// }
// returnNeighboringNumbers(5);


// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии.
// (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже),
// где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
//  Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов,
// проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается
// по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза,
// каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// function getMathResult(a, b) {
//     if (typeof(b) !== 'number' || b <= 0) {
//         console.log(a);
//         return a;
//     }
//     let str = '';
//     for (let i = 1; i <= b; i++) {
//         if (b === i) {
//             str += a * i;
//         } else {
//             str = str + a * i + "---"
//         }
//     }
//     console.log(str);
// }
//
// getMathResult(10,5);

// Примеры:
// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20

/* Задание на урок: практика №3
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat.
 Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет
3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}".
 Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();
//
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
//             console.log('done');
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// // rememberMyFilms();
//
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель")
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка")
//     }
// }
// // detectPersonalLevel();
//
// function showMyDB() {
//     if (!personalMovieDB["privat"]) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();
//
// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }
// writeYourGenres();
// // console.log(personalMovieDB);






















