const form = document.getElementById('emailForm');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (!validateEmail()) {
    e.preventDefault();
  }
});

let validateEmail = () => {
  const email = document.getElementById('email').value;

  let email_split = email.split('@');
  if (email_split.length == 2 && email_split[1] && email_split[1].match(/\./)) {
    return true;
  } else {
    error.innerHTML = 'Please enter a valid email address.';
    return false;
  }
};
