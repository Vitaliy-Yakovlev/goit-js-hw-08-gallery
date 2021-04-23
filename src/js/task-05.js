// const inputRef = document.querySelector('#name-input');
// console.log(inputRef);

// const spanRef = document.querySelector('#name-output');
// console.log(spanRef);

const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.span.textContent = event.currentTarget.value;
  if (refs.input.textContent.length === refs.span.textContent.length) {
    refs.span.textContent = 'незнакомец';
  }
}
