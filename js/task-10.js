function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function divSize() {
  let size = 30;
  return size;
}

const createBoxes = function (amount) {
  const arrayDivs = [];
  let size = divSize();
  for (let i = 0; i < amount; i++) {
    const item = document.createElement('div');
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.classList.add('animation');

    arrayDivs.push(item);
    size += 10;
  }
  boxes.append(...arrayDivs);
};

create.addEventListener('click', () => {
  if (inputEl.value === '') {
    return alert('Please enter a value');
  }
  createBoxes(inputEl.value);
});
const clearData = () => {
  boxes.innerHTML = '';
  inputEl.value = '';
};
destroy.addEventListener('click', clearData);
