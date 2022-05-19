"use strict";

let a = 5,
    b = a;   // Переменная a заменяется на ее значение

b = b + 5;

console.log(a);
console.log(b);

const obj = {
  a: 5,
  b: 1
};

const copy = obj;  // в Переменную cope передается ссылка на объект, а не он сам

copy.a = 10;

console.log(copy);
console.log(obj);

function copyObj(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copyObj(numbers); // Создание поверхностной копии

newNumbers.a = 10;

// Объект внутри объекта копирует ссылку на уже существующий объект второго уровня
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

// Соединяет один объект со вторым
Object.assign(newNumbers, add);

console.log(newNumbers);
// Благодаря этому, можно создать копию объекта, не зависящую от оригинала
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'bark';

console.lof(newArray);
console.log(oldArray);

// SPREAD опереатор - оператор разворота. Разворачивает структуру, превращая в набор данных
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];
// Массив разложиться на три разных элемента передоваемых в функцию
log(...num);

const array = ['a', 'b'];
// Создает копию массива без ссылок
const newArrays = [...array];

const q = {
  one: 1,
  two: 2
};

const newobj = {...q};