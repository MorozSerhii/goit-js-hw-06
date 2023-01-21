const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const markUpContainer = document.querySelector('#ingredients');

const makeSomeMarkUp = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;

    itemEl.classList.add('.item');

    return itemEl;
  });
};
const elements = makeSomeMarkUp(ingredients);
markUpContainer.append(...elements);
