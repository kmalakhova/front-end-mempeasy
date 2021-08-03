// const URL = "https://back-end-mempeasy.herokuapp.com/"
const URL = "http://127.0.0.1:5000/"

const passwordInput = document.getElementById('passwordInput');
const hintInput = document.getElementById('hintInput');
const myTooltip = document.getElementById('myTooltip');

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
    var password = data.password;
    passwordInput.style.height = getContainerHeight(password) + "px"; 
    passwordInput.value = password;

    var hint = data.hint;
    hintInput.style.height = getContainerHeight(hint) + "px"; 
    hintInput.value = hint;

    myTooltip.classList.add('isActive');
};

function getContainerHeight(jsonValue) {
    var container = document.getElementById('container');
    container.value = jsonValue;

    var containerHeight;
    containerHeight = container.scrollHeight + 3;
	console.log(containerHeight)
    container.value = "";

    return containerHeight;
};

function copyPassword() {
    passwordInput.select();
    document.execCommand('copy');
    myTooltip.innerHTML = "COPIED";

    setTimeout(function () {
        myTooltip.classList.remove('isActive');
        myTooltip.textContent = 'CLICK TO COPY';
    }, 1000);
};

const resultsButton = document.getElementById('generate-password-button');
resultsButton.addEventListener('click', getResponse);

