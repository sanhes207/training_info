"use strict";

// DOM - Document Object Model - Модель структуры страницы
// работа со страницей проходит через использование ключевого обращение document
// getElementById возвращает элемент страницы, который имеет идентификатор обозначенных в скобках
const box = document.getElementById('box');
console.log(box);

// getElementByTagName возвращает псевдомассив элементов, который содержит все элементы с определенным тегом
const buttons = document.getElementsByTagName('button');
console.log(buttons);
// обращение к конкретному элементу из псевдомассива
console.log(buttons[3]);
// Даже если элемент 1 на странице - возвращается псевдомассив.
// Обращение к элементу идет обязательно серех индекс

// Помещение в переменную определенного элемена из псевдомассива всех элементов
const btns = document.getElementsByTagName('button')[1];
console.log(btns);

// getElementByClassName возвращает псевдомассив элементов с определенным классом
const circles = document.getElementsByClassName('circle');
console.log(circles);

// Новые методы работы
// В нынешнее время используется чаще всего, благодаря возможности использовать для обозначения селекторы
// Создается NODEList
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
// Так же querySelector имеет возможность работы с forEach
hearts.forEach(item => {
  console.log(item);
});
// Возвращает первый встреченный элемент совпадающий с условием
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);