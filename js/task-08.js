const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Треба заповнити всі поля!');
  }

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  event.currentTarget.reset();
}
