"use strict";

// Callback - функции обратного вызова, передоваемые в другие функции в качестве одного из аргументов.

function first() {
  setTimeout( function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

// Используются для отлова событий и реагирования на них

function doHomework(subject, Callback) {
  console.log(`I do my ${subject} homework`);
  Callback();
}

doHomework('math', () => {
  console.log('I\'m done');
});