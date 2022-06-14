'use strict';

// let number = 5; debugger

// function logNumber() {
//   let number = 4; debugger
//   console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8; debugger

// logNumber(); debugger

function createCounter() {
  let counter = 0;

  const myFunction = function() {
    counter += 1;
    return counter;
  };

  return myFunction;
}

const incriment = createCounter();
const c1 = incriment();
const c2 = incriment();
const c3 = incriment();

console.log(c1, c2, c3);

console.log('a'> 'b');