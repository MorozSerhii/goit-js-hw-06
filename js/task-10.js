function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

const createBoxes = function (amount) {
  const arrayDivs = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    size += 10;
    arrayDivs.push(item);
  }
  boxes.append(...arrayDivs);
};

create.addEventListener('click', () => {
  if (inputEl.value === '') {
    return alert('Please enter a value');
  }
  createBoxes(inputEl.value);
});

destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
  inputEl.value = '';
});
