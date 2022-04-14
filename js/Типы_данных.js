"use strict";

// 1 часть - Примитивы
//Чиловой тип
let number1 = 4;          //Целые числа
let number2 = 4.6;        //Дробные числа(через точку)
console.log(4/0);         //Infinity
console.log(-4/0);        //-Infinity
console.log("string"*9);  //NaN - Not a Number (не число)

//Строковый
const person1 = "Alex";   //Какие скобки ставить не имеют значение
const person2 = '5';      //Зависит от стилевых особенностей проекта
//Интерполяция
const person3 = `5 ${number1} 5`;  //Косые скобки позволяют помещать в себя переменные

//Логический
const bool1 = true;   //Логический тип принимает в себя true/false
const bool2 = false;  //true - да, false - нет

//null undefind
console.log(something); // null - когда чего-то не существует
let und;
console.log(und);       // объект вызова существует, но внутренности пусты

//Symbol
//BigInt

// 2 часть - Комплексная
// Объект
const obj = {
  name: "John",
  age: 25,
  isMarrid: false
};
console.log(obj.name);
console.log(obj["name"]);
//Массив - частный случай объектов
let arr = ['plum.png', 'orange.jpg', 6, {}, []]; //массивы комплексны
console.log(arr[1]); //orange.jpg

