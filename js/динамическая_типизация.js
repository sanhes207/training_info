"use strict";

// Динамическая типизация означает, что что-то может поменять свой тип в процессе работы

// ToString

// 1. Практически не используется
console.log(typeof(String(null)));

// 2 - Конкатенация (складывание со строкой выдает строку)
console.log(typeof(5 + ''));

const num = 5;
console.log('https:vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// To Number

// 1. Практически не используется
console.log(typeof(Number('14')));

// 2. Унарный плюс (использование плюса перед конструкцией)
console.log(typeof(+'5'));

// 3. Парсинг значения
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To Boolean

// False: 0, '', null, undefind, NaN
// True: все остальное

// 1.
let switcher = null;

if (switcher) {
  console.log('Working...');
}

switcher = 1;
if (switcher) {
  console.log('Working...');
}

// 2. Практически не используется
console.log(typeof(Boolean('14')));

//3. Два знакак отрицания превращает в булиновый тип
console.log(typeof(!!'14'));