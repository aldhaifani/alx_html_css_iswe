const form = document.getElementById('submitForm');

const errorMsg = document.getElementById('error_msg');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');

form.addEventListener('submit', (e) => {
  handleFormSubmit(e);
});

const handleFormSubmit = function (event) {
  event.preventDefault();
  if (!nameInput.value || !emailInput.value) {
    errorMsg.innerText = 'Please fill in all required fields';
    errorMsg.style.color = 'red';
    errorMsg.style.display = '';
  } else {
    errorMsg.innerHTML = 'Form submitted successfully!';
    errorMsg.style.color = 'green';
    errorMsg.style.display = '';
    setTimeout(() => form.submit(), 2000);
  }
};
