"use strict";

let num = 50;

//циклы с while
while (num < 55) {
  console.log(num);
  num++;
}

//цикл с do..while, проходит одну обязательную итерацию
do {
  console.log(num);
  num++;
} while(num < 55);

//цикл с for
for (let i = 1; i < 8; i++) {
  if (i == 5) {
    continue; // пропуск итерации
  }
  if (i == 6) {
    break;  //выход из цикла
  }
  console.log(num);
  num++;
}

//Цикл в цикле
for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}