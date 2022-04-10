"use strict";

//Предупреждение пользователя о чем-то важно/вызов окна оповещения
alert("Hello"); 

// Модальное окно для подстверждения. Записывается в переменную
const result = confirm("Are you here?");
console.log(result);

// Текстовое поле для ввоа ответа пользователя, записывается в переменную
const answer = prompt("Вам есть 18?", "18");
console.log(typeof(answer));

// выводит тип переменной
typeof();
// все данные полученные от пользователя являются строками

const answer = [];
// Все ответы можно помещать в массив данных
answer[0] = prompt("Как ваше имя?", "");
answer[1] = prompt("Как ваша фамилия?", "");
answer[2] = prompt("Сколько вам лет?", "");
document.write(answer);
console.log(typeof(answer));

console.log(typeof(null)); //ошибка допущения JSs