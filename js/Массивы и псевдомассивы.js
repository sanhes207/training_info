"use strict";

const arr = [1, 2, 3, 4, 8];

arr.pop(); // Удаляет последний элемент массива и возвращает его

arr.push(10); // Добавляет элемент в конец массива

arr.shift(); // Удаляет первый элемент и возвращает его
arr.unshift(7); // Добавляет первый элемент в массив

console.log(arr);

//Перебор массива и вывод каждого элемента
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Перебор массива и вывод элемента. Возможно использование continue и break.
//Проходит по значениям, поэтому нельзя использовать в объектах имеющих методы.
for (let value of arr) {
  console.log(arr[value]);
}

//Длина массива(рассчитывается как последний элемент + 1)
console.log(arr.length);
//В массиве могут быть пустые элементы, которые тоже будут считаться
arr[99] = 0;
console.log(arr.length);

//перебор массива с передачей функции, в которой аргументами указываются
// элемент массива, индекс массива и название массива
const array = [1, 2, 3, 4, 8];
array.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${array}`)
});

const str = "Кимоно, фича, кекь";
// SPLITE - создает из строки массив символов, по указанному разделителю
const products = str.split(', ');
console.log(products);

// Сортирует по строковом значению по умолчанию
// Передается функция, которая устанавливает, по какому признаку происходит сортировка
products.sort(compareNum);

// Соединяет массив в цельную строку, соединяя элементы указанным разделителем
console.log(products.join(';'));

function compareNum(a, b) {
  return a - b;
}

//Псевдомассивы - объект, структура которого совпадает с массивом
//однако, не имеет методов(просто хранит данные)

// Массивы как и объекты можно деструктуризирвать

// Данный пример показывает деструктуризацию посредством ссылки
const profile = ['Александ', 'Николаевич', 'vk.com'];

const [firstname, lastname, website] = profile;

console.log(firstname);
console.log(lastname);
console.log(website);

// Здесь деструктуризация происходит на прямую
const [firstname, lastname, website] = [
  'Александ', 
  'Николаевич', 
  'vk.com'
];

console.log(firstname);
console.log(lastname);
console.log(website);
