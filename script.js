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




function makeExpandingArea(container) {
 var area = container.querySelector('textarea');
 var span = container.querySelector('span');
 if (area.addEventListener) {
   area.addEventListener('passwordInput', function() {
     span.textContent = area.value;
   }, false);
   span.textContent = area.value;
 } else if (area.attachEvent) {
   // IE8 compatibility
   area.attachEvent('onpropertychange', function() {
     span.innerText = area.value;
   });
   span.innerText = area.value;
 }
// Enable extra CSS
container.className += "active";
}var areas = document.querySelectorAll('.expandingArea');
var l = areas.length;while (l--) {
 makeExpandingArea(areas[l]);
}