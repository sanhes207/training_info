"use strict";


//Function Decloration. Декларированные функции создаются в коде и объявляется до начала работы.
function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage("Hello");


// Замыкание - эта сама функция со всеми переменными, которые ей доступны
function createCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1,c2,c3);

//Return - возвращает значение из функции
function calc(a, b) {
  return (a + b);
}
console.log(calc(4, 3));


//Function Expression. Создается, когда до нее доходит очередь кода
const logger = function() {
  console.log("hello");
};
logger();


//Стрелочная функция. Не имеет контекста вызова.
const calcul = (a,b) => a + b;