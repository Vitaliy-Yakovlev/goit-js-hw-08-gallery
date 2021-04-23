const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const element = ingredients.map(option => {
  const titleRef = document.createElement('li');
  titleRef.textContent = option;
  return titleRef;
});

console.log(element);
ingredientsRef.append(...element);
