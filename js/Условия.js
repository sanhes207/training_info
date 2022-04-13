"use strict";

// опреторы условия if/else
if (4==4) {
  console.log("Ok");
} else {
  console.log("Error");
}

const num = 50;
// Разветвление условия else if
if (num < 49) {
  console.log("Error");
} else if (num > 50) {
  console.log("Много");
} else {
  console.log("Ok");
}

// Тернарный опператор, проверяющий услове и выводящий действие правды или несовпадения
// Тернарным, данный оператор является из-за исользования трех операторов
// Является единтсвенным в JS
(num == 50) ? console.log("ok") : console.log("Error");

// Оператор Switch. Всегда используется строгое сравнение
switch (num) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('Ok');
    break;
  default:
    console.log('Дефолтный вариант');
    break;
}