const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', fontSizeControl);

function fontSizeControl() {
  textRef.style.fontSize = inputRef.value + 'px';
}
