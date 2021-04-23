const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);
const maxLengthInput = inputRef.dataset.length;

function onInputBlur() {
  if (inputRef.value.length === Number(maxLengthInput)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    console.log(inputRef.value.length);
    inputRef.classList.add('invalid');
  }
}
