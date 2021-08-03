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

// TODO rename getThis
const populatePage = (data) => {
    const passwordInput = document.getElementById('passwordInput');
	var getThis = data.password;
	passwordInput.style.height = getContainerHeight(getThis); 
    passwordInput.value = data.password;

    const hintInput = document.getElementById('hintInput');
	var getThis = data.hint;
	hintInput.style.height = getContainerHeight(getThis); 
    hintInput.value = data.hint;

    const myTooltip = document.getElementById('myTooltip');
    myTooltip.classList.add('isActive');
};

function getContainerHeight(getThis) {
	var container = document.getElementById('container');
	// console.log(container.scrollHeight)
	container.value = getThis;

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

