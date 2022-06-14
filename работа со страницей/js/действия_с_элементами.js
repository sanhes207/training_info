"use strict";

const box = document.getElementById('box'),
      btn = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      oneheart = wrapper.querySelector('.heart'),
      hearts = wrapper.querySelectorAll('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btn[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: green; width: 250px';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

// className - устаревшее и не используется
div.classList.add('black');

document.body.append(div);
wrapper.append(div);

wrapper.prepend(div);
hearts[2].before(div);
hearts[2].after(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);

//Устаревшее:
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]);
// wrapper.removeChild(hearts[1]);
// wrapper.replaceChild(circles[0], hearts[2]);

div.innerHTML = '<h1>Hello world</h1>'; // Может принимать для вставки HTML текст
//div.textContent = 'text'; //Для вставки используется только текстовый контент

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

