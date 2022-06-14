"use strict";

// Обработка событий производится тремя способами
// 1 - в HTML документе // Вообше не используется
// <button onclick="alert('Click')" id="btn">Нажми на меня</button>

// 2 - использовать св-во DOM-дерева
// Практически не используется из-за проблемы
// При повторном назначения св-ва предидущие стираются. 
const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//   alert('Click');
// };
// Также нельзя удалять обработчик событий в процессе работы

// 3 - addEventListener
// Назначаются несколько действий на одно событие.
btn.addEventListener('click', () => {
  alert('Click');
});
// mouseenter - при наведение мышки на объект
// e(event) - всегда первый аргумент callback функции.
// event содержит всю необходимую информацию об ивенте

const deleteElement = (e) => {
  console.log(e.target);
};

//btn.addEventListener('mouseenter', deleteElement);
// удаляет обработчик событий
//overlay.addEventListener('mouseenter', deleteElement);

//всплытие событий это когда обработчик событий сначала срабатывает
// на вложенном событии а потом все выше и выше по иерархии

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
  event.preventDefault(); // Отменяет действие предусматриваемое браузером по умолчанию

  console.log('ну, почти перешел');
});

btn.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('кнопка работает');
  }, {once:true});
});

// Опции события\
// once - объект нужно повторить один раз