function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector('body');
const colorChangrtBtn = document.querySelector('.change-color');
const titleEl = document.querySelector('.color');

const handleClickChangeColor = () => {
  let colors = getRandomHexColor();
  bodyColor.style.backgroundColor = colors;
  titleEl.textContent = colors;
};
colorChangrtBtn.addEventListener('click', handleClickChangeColor);
