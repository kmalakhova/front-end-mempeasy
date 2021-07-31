// const axios = require('axios');

const getResponse = () => {
  // You'll want to use fetch here to grab the data
  // https://dmitripavlutin.com/javascript-fetch-async-await/

  const data = {
    hint: 'hint text response',
    password: 'password text response',
  };
  populatePage(data);
};

const populatePage = (data) => {
  const passwordInput = document.getElementById('passwordInput');
  passwordInput.value = data.password;

  const hint = document.getElementById('hint');
  hint.innerText = data.hint;
};

function copyPassword() {
  const passwordInput = document.getElementById('passwordInput');
  passwordInput.select();
  document.execCommand('copy');

  const tooltip = document.getElementById('myTooltip');
  tooltip.innerHTML = '👍';
}

const registerEventHandlers = () => {
  const resultsButton = document.getElementById('generate-password-button');
  resultsButton.addEventListener('click', getResponse);

  const passwordInput = document.getElementById('passwordInput');
  passwordInput.addEventListener('click', copyPassword);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
