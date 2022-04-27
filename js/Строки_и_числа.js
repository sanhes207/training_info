"use strict";

// Строка не меняется напрямую, только благодоря определенным методам

const str = 'test';
const arr = [1, 2, 4];

console.log(str.length);//Количество символов
console.log(arr.length);//Количество ячеек

console.dir(Number); //ввывод в виде объекта

console.assert(str[2]); //Вывод определенного символа строки

console.assert(str[2] = 's'); //Не меняет строку

console.log(str.toUpperCase()); // Вывод строки в верхнем регистре(не меняет строку)
console.log(str.toLowerCase()); // Вывод строки в нижнем регистре(не меняет строку)

const fruit = 'Some fruit';

console.log(fruit.indexOf("fruit")); // Вывод номера позиции по нахождению символов
console.log(fruit.indexOf("q")); // -1 означает, что символ не найден

const logg = 'Hello world';

// slice режет строку начиная с первого аргумента(6) и до второго(11) не включая
console.log(logg.slice(6, 10));
// С одним аргументом, строка режется до конца
console.log(logg.slice(6));
// При отрицательном значении отсчет идет с конца строки
console.log(logg.slice(-5));

// делает то, что и слайс. не поддерживает отрицательные значения. Первый арг может быть больше второго
console.log(logg.substring(6, 10));

// показывает с какого символа начинать вырезать и количество вырезаемых символов
console.log(logg.substr(6, 5));


// Числа
// Для работы с числами используется отдельная встроенная библиотека Math

const num = 12.2;

//Round используется для округления
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); // Преобразование в числовой тип, обрезая строковые элементы
console.log(parseFloat(test)); // Преобразование в числовой формат с плавающей точкой