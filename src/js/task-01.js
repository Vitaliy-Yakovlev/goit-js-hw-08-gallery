const listRef = document.querySelectorAll('.item');
const categoriesRef = document.querySelector('#categories');

function quantityElementsOfList() {
  const categoriesLength = categoriesRef.children.length;
  console.log(`В списке ${categoriesLength} категории.`);

  for (const elementList of listRef) {
    const categoryName = elementList.querySelector('h2').textContent;
    console.log(`Категория: ${categoryName}`);

    const categoryLengthList = elementList.querySelector('.item ul').children
      .length;
    console.log(`Количество элементов: ${categoryLengthList}`);
  }
}

console.log(quantityElementsOfList());
