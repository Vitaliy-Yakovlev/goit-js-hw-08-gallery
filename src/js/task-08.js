/* 8 Задача : Напиши скрипт создания и очистки коллекции элементов. Пользователь
* вводит количество элементов в input и нажимает кнопку Создать, после чего
* рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов
* очищается.

* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
* Функция создает столько div, сколько указано в amount и добавляет их в
* div#boxes.

* Каждый созданный div:

* Имеет случайный rgb цвет фона Размеры самого первого div - 30px на 30px Каждый
* следующий div после первого, должен быть шире и выше предыдущего на 10px Создай
* функцию destroyBoxes(), которая очищает div#boxes.
*/

// const refs = {
//   input: document.querySelector('input'),
//   renderButton: document.querySelector('[data-action="render"]'),
//   destroyButton: document.querySelector('[data-action="destroy"]'),
//   divBoxes: document.querySelector('#boxes'),
// };
// console.log(refs.input);
// console.log(refs.renderButton);
// console.log(refs.destroyButton);
// console.log(refs.divBoxes);

// refs.renderButton.addEventListener('click', onTargetButtonRenderClick);
// refs.destroyButton.addEventListener('click', onTargetButtonDestroyClick);
// refs.input.addEventListener('input', onInputChenge);

// function onTargetButtonRenderClick() {
//   const newDiv = document.createElement('div');
//   newDiv.className = 'div';
//   newDiv.style.width = '30px';
//   newDiv.style.height = '30px';
//   newDiv.style.marginLeft = '10px';

//   newDiv.style.backgroundColor =
//     '#' + Math.random().toString(16).substring(2, 8);

//   console.log(newDiv);

//   refs.divBoxes.style.display = 'flex';
//   refs.divBoxes.style.marginTop = '20px';

//   refs.divBoxes.appendChild(newDiv);
// }

// function onTargetButtonDestroyClick() {
//   const deleteDiv = refs.divBoxes.childNodes;
//   Array.from(deleteDiv).forEach(node => node.remove());
// }

// function onInputChenge(amount) {
//   const namberInput = Number(refs.input.value);

//   console.log(namberInput);
// }
