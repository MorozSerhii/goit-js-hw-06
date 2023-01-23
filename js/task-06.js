const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;

console.log(inputLength);

inputEl.addEventListener('blur', () => {
  if (
    inputEl.value.length >= inputLength &&
    inputEl.value.length <= inputLength
  ) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
