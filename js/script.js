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


// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба
// (тоже базовая математика, иногда используется в создании анимаций).
// Эта функция принимает в себя целое число со значением длины ребра куба.
// Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения
// невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он
// не работает и тесты будут ломаться. Это из-за того, что этот оператор
// из более нового стандарта, чем тут доступен.
//     Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea(ribLength) {
//     const getNum = 6;
//     let cubeVolume = ribLength * ribLength * ribLength
//     let cubeSurfaceArea = getNum * (ribLength * ribLength)
//     if (ribLength === String(ribLength) || ribLength <= 0 || ribLength !== Math.round(ribLength)) {
//         return 'При вычислении произошла ошибка';
//     }
//     return `Объем куба: ${cubeVolume}, площадь всей поверхности: ${cubeSurfaceArea}`;
// }
// console.log(calculateVolumeAndArea(77));

// Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
//
// Пример:
//
//getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// function getCoupeNumber(num) {
//     if (num === String(num) || num < 0 || num !== Math.round(num)){
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }  else if (num > 36 || num === 0) {
//         return "Таких мест в вагоне не существует";
//     } else if (num >= 1 && num <= 4) {
//         return 1;
//     } else if (num >= 5 && num <= 8) {
//         return 2
//     } else if (num >= 9 && num <= 12) {
//         return 3
//     } else if (num >= 13 && num <= 16) {
//         return 4
//     } else if (num >= 17 && num <= 20) {
//         return 5
//     } else if (num >= 21 && num <= 24) {
//         return 6
//     } else if (num >= 25 && num <= 28) {
//         return 7
//     } else if (num >= 29 && num <= 32) {
//         return 8
//     } else if (num >= 33 && num <= 36) {
//         return 9
//     }
// }
//
// console.log(getCoupeNumber(9));

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }
//
//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }
//
//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }
//
// getCoupeNumber(33);// код петриченко

// Создайте функцию, которая принимает в себя целое число минут и возвращает
// время в нужном формате строки. (Смотри пример). Обратите внимание на окончание
// слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число,
// дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
//
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов).
// Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд).
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов).
// Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
//
//     Пример:
//
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// function getTimeFromMinutes(minutes) {
//     let hour = Math.floor(minutes / 60);
//     let min = minutes  % 60;
//     if (typeof (minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
//         return "Ошибка, проверьте данные"
//     }
//     let hoursStr = '';
//     switch (hour) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }
//     return `Это ${hour} ${hoursStr} и ${min} минут` // свич подсмотрел остальное, сделал сам
// }
//
// console.log(getTimeFromMinutes(159));

// Напишите функцию, которая принимает в себя 4 числа и
// возвращает самое большее из них. Если один из аргументов не
// является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
//
//     Пример:
//
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

// function findMaxNumber(a, b, c, d) {
//     if (typeof (a) !== 'number' ||
//         typeof (b) !== 'number' ||
//         typeof (c) !== 'number' ||
//         typeof (d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// }
//
// console.log(findMaxNumber(1, 2, 6.6, 10));
// console.log(findMaxNumber(1, 2, 6.6, '10'));

// Создайте функцию, которая будет принимать в себя
// один аргумент-целое положительное число. Она должна возвращать строку,
// в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно
// быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку.
// Решать без применения рекурсии.
//
//     Пример:
//
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }
//     let result = '';
//     let first = 0;
//     let second = 1;
//
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }
//
//         let third = first + second;
//         first = second;
//         second = third;
//     }
//
//     return result;
// }
// console.log(fib(4)); // => ''0 1 1 2"
// console.log(fib(7)); // => ''0 1 1 2 3 5 8"
// console.log(fib('7')); // => ''"
// console.log(fib(1)); // => "0"
// console.log(fib(0)); // => ''"

// let options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'red',
//         bg: 'blue',
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// }
// // options.makeTest();
// // console.log(Object.keys(options).length);
// let {border,bg} = options.colors;
// console.log(bg);

// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Ключ ${i} значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Ключ ${key} значение ${options[key]}`);
//     }
//
//
// }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(salaries) {
//
//     let max = 0;
//     let maxName = null;
//
//     for(const [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }
//
//     return maxName;
// }
//
// console.log(topSalary(salaries));

// Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
//
//     Пример:
//
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };
//
// function showExperience(plan) {
//     let {exp} = plan.skills;
//     return exp;
//     let res;
//     for (let planKey in plan) {
//         if (typeof (plan[planKey]) === 'object') {
//             for (let key in plan[planKey]) {
//                 res = plan[planKey]['exp'];
//             }
//         }
//     }
//     return res;
//
// }
//
// console.log(showExperience(personalPlanPeter));

// Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
//
//     Пример:
//
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
//     P.S. Для переноса строки используется \n в конце строки.

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '10%'
//         },
//         exp: '1 month'
//     }
// };
//
// function showProgrammingLangs(plan) {
//     let str = '';
//     let {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
// return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));
// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
//
//     Пример:
//
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

//
// const personalPlanPeter = {
//     name: "Peter",
//     age: "30",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//             ruby: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs1() {
//         let {age} = personalPlanPeter;
//         let {languages} = personalPlanPeter.skills;
//         return `Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;
//
//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });
//
//         return str;
//     }
//
// };
// console.log(personalPlanPeter.showAgeAndLangs1(personalPlanPeter))
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
//
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
//
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
// let [Peter, Ann, Alex, Linda] = arr;
// if (arr.length === 0) {
//     return 'Семья пуста';
// }
//     return `Семья состоит из: ${Peter} ${Ann} ${Alex} ${Linda}`
// }
// console.log(showFamily(family));

// напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
//
//     Пример:
//
// standardizeStrings(favoriteCities)  выведет в консоль
//
// lisbon
// rome
// milan
// dublin

// Это частая задача в реальности,
// так как от пользователя нам могут прийти ответы в самых разных
// форматах. В том числе и с разными буквами :) Поэтому нам нужно
// привести строки в один формат для правильной работы.

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin']
// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }
//
// console.log(standardizeStrings(favoriteCities))

// Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
//
//     Пример:
//
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂

// const someString = 'This is some strange string';
//
// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     return str.split('').reverse().join('');
// }
//
// console.log(reverse(someString));

// Представьте такую реальную ситуацию. У вас есть
// банкомат, который выдает деньги из двух разных банков в разных валютах.
// Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
//
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr,
// которая принимает два аргумента: первый - это массив со всеми доступными
// валютами из двух банков сразу (сейчас представим, что они не могут повторяться),
// второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.
// Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.
// Функция возвращает строку в нужном виде.
//
//     Пример:
//
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
//     Доступные валюты:
//     UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//
// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//     //
//     // arr.forEach(function(curr, i) {
//     //     if (curr !== missingCurr) {
//     //         str += `${curr}\n`;
//     //     }
//     // });
//
//     // Или
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === missingCurr) {
//             continue;
//         }
//         str += `${arr[i]}\n`;
//     }
//
//     return str;
// }
//
// console.log(availableCurr([...baseCurrencies,...additionalCurrencies], 'UAH'));











