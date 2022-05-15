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
//Вытаскивание из вложенных в объект, других объектов, его свойств в отдельную переменную
const {border, bg} = options.colors;
console.log(border);