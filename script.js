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
};




const registerEventHandlers = () => {
    const resultsButton = document.getElementById('generate-password-button');
    resultsButton.addEventListener('click', getResponse);

    const passwordInput = document.getElementById('passwordInput');
    passwordInput.addEventListener('click', copyPassword);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);


