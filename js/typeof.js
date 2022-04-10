//Взаимодействие с typeof
// Числа
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // несмотря на то, что это "Not-A-Number" (не число)
typeof Number(1) === 'number'; // никогда не используйте эту запись!


// Строки
typeof '' === 'string';
typeof 'bla' === 'string';
typeof '1' === 'string'; // обратите внимание, что число внутри строки всё равно имеет тип строки
typeof (typeof 1) === 'string'; // typeof всегда вернёт в этом случае строку
typeof String('abc') === 'string'; // никогда не используйте эту запись!


// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // никогда не используйте эту запись!


// Символы
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// Объекты
typeof {a: 1} === 'object';

// используйте Array.isArray или Object.prototype.toString.call
// чтобы различить обычные объекты и массивы
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';


// То что ниже приводит к ошибкам и проблемам. Не используйте!
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';


// Функции
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';