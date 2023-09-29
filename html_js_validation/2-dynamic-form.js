const num_fields = document.getElementById('numFields');
const input_fields = document.getElementById('inputContainer');
const form = document.getElementById('dynamicForm');
let fields_id = [];

input_fields.style.display = 'flex';
input_fields.style.flexDirection = 'Column';
input_fields.style.width = '400px';

form.addEventListener('submit', (e) => {
  generateInputFields(num_fields.value);
  e.preventDefault();
});

const generateInputFields = function (num) {
  console.log('yes');
  for (let i = 1; i <= num; i++) {
    const text_field = document.createElement('input');

    text_field.setAttribute('type', 'text');
    text_field.setAttribute('name', 'field' + i);
    text_field.setAttribute('required', '');

    input_fields.appendChild(text_field);
    fields_id.push('field' + i);
  }
};

const validateForm = function () {
  return form.validateForm();
};
