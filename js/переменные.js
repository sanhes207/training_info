"use strict"; //объявление строго режима(ипользовать только новый формат)

//console.log(number); выведет ошибку
let number = 5; /*новый формат объявления изменяемой переменнойы не видима до объявления*/
const leftBorderWidth = 1; /*объявление неизменяемой переменной*/

number = 10;
console.log(number);

const obj = { /*константой является внешний объект, его менять нельзя*/
  a : 10
};
obj.a = 50; /* внутренние переменные объекта не являются константами*/
console.log(obj.a);

console.log(number1); //выводит undefind
var number1 = 7; //старый формат(не используются) видим до объявления в скопе

//camelCase
//snake_case - не встречается в JS
//UPPER_SNAKE_CASE - используются для констант
const COLOR_RED = '#F00';

//нижнее пдчеркивание перед переменной, обозночает ее константность
const _apiBase

//Kebab-case
//PascalCase - используется для обозночение классов