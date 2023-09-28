const form = document.getElementById('passwordForm');
const error = document.getElementById('error');

console.log('hello');

form.addEventListener('submit', (e) => {
  if (!validatePassword()) {
    e.preventDefault();
  }
});

let validatePassword = () => {
  const pswd = document.getElementById('password').value;

  if (pswd.length < 8) {
    error.innerHTML = 'Password must be atleast of 8 characters long';
    return false;
  } else if (!pswd.match(/[a-z]/)) {
    error.innerHTML = 'Password must contain atleast one lowercase character';
    return false;
  } else if (!pswd.match(/[A-Z]/)) {
    error.innerHTML = 'Password must contain atleast one uppercase character';
    return false;
  } else if (!pswd.match(/[0-9]/)) {
    error.innerHTML = 'Password must contain atleast one digit';
    return false;
  } else if (!pswd.match(/[!@#$%^&*]/)) {
    error.innerHTML =
      'Password must contain atleast one special character (e.g. !@#$%^&*)';
    return false;
  } else {
    return true;
  }
};
