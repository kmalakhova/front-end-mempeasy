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
    var password = data.password;
    passwordInput.style.height = getContainerHeight(password); 
    passwordInput.value = password;

    const hintInput = document.getElementById('hintInput');
    var hint = data.hint;
    hintInput.style.height = getContainerHeight(hint); 
    hintInput.value = hint;

    const myTooltip = document.getElementById('myTooltip');
    myTooltip.classList.add('isActive');
};

function getContainerHeight(jsonValue) {
    var container = document.getElementById('container');
    container.value = jsonValue;

    var containerHeight;
    containerHeight = container.scrollHeight + 3;
    container.value = "";

    return containerHeight;
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

