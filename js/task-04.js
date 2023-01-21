const removeBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

removeBtn.addEventListener('click', function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

addBtn.addEventListener('click', function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
