function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const colorChangrtBtn = document.querySelector('.change-color');
const titleEl = document.querySelector('.color');

const handleClickChangeColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  titleEl.textContent = getRandomHexColor();
};
colorChangrtBtn.addEventListener('click', handleClickChangeColor);
