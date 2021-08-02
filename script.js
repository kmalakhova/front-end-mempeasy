<<<<<<< HEAD
// URL="https://back-end-mempeasy.herokuapp.com/"
URL="http://127.0.0.1:5000/"

const getResponse = () => {
    let jsondata = "";
    async function getJson(url) {
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }
    async function main() {
        jsondata = await getJson(URL)
        // console.log(jsondata);
        populatePage(jsondata)
    }
    main();  
};

const populatePage = (data) => {
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.value = data.password;

    const hintInput = document.getElementById('hintInput');
    hintInput.value = data.hint;

    const myTooltip = document.getElementById('myTooltip');
    myTooltip.classList.add('isActive')
};

function copyPassword() {
    const passwordInput = document.getElementById('passwordInput');
    passwordInput.select();
    document.execCommand('copy');

    const tooltip = document.getElementById('myTooltip');
    tooltip.innerHTML = "COPIED";

    setTimeout(function () {
        tooltip.classList.remove('isActive');
        tooltip.textContent = 'CLICK TO COPY';
    }, 1000);
};


const registerEventHandlers = () => {
    const resultsButton = document.getElementById('generate-password-button');
    resultsButton.addEventListener('click', getResponse);

    const passwordInput = document.getElementById('passwordInput');
    passwordInput.addEventListener('click', copyPassword);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);




=======
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
>>>>>>> be3597c5c642c437ab64e90be3726c993867ebcf
