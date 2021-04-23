const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action = decrement]');
const incrementBtn = document.querySelector('[data-action = increment]');
const valueElement = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueElement);

decrementBtn.addEventListener('click', function () {
  counterValue.decrement();

  valueElement.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
  counterValue.increment();
  valueElement.textContent = counterValue.value;
});
