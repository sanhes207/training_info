"use strict";
//Создание объекта - устаревший формат
const obj = new Object();
//Создание объекта
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  //вложенный объект
  colors: {
    border: 'black',
    bg: 'red'
  },
  //вложенная функция (метод объекта)
  makeTest: function() {
    console.log('Test');
  }
};
//вызов метода объекта
options.makeTest();
//обращение к свойству объекта
console.log(options.name);
console.log(options[name]);
//удаление объекта
delete options.name;
console.log(options);

let counter = 0;
//перебор всех св-в объекта 
for (let key in options) {
  if (typeof(options[key]) === 'object'){
    for (let i in options[key]) {
      console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key}, имеет значение ${options[key]}`);
    counter++;
  }
}
console.log(counter);

// Методы объектов
//вывод всех свойств обозначенного объекта(без вложенных)
console.log(Object.keys(options));
//вывод количества свойств у объекта
console.log(Object.keys(options).length);

//Деструктуризация
//Вытаскивание из вложенного объекта его свойств в отдельные переменные
//прописанные в фигурных скобках
//слева список переменных на которые разбивается объект, справа сам объект который нужно разбить на переменные
const {border, bg} = options.colors;
//colors{
//  border: black,
//  bg: red
//}
//boder = black / bg = red
console.log(border);
//для указание других переменных, новые названия указываются через :
const {border, bg: backGround} = options.colors;
//если свойств в объекте изначально нет, они приравниваются
const {value = 100, bg:backG = 7} = options.colors;