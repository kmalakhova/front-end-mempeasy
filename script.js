// const axios = require('axios');

// const getResponse = () => {
// axios.get(`${process.env.HEROKU_URL}`)
//     .then((response) => {
//     console.log(response.data);
//     const hint = response.data['hint']
//     const password = response.data['password']
//     })
//     .catch((error) => {
//     console.log('error.response.data');
//     });
// }

// function myFunction() {
//     var copyText = document.getElementById("password");
//     copyText.select();
//     document.execCommand("copy");
    
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "👍";
// }

// function outFunc() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "CLICK TO COPY";
// }

// const registerEventHandlers = () => {
//     const copyPassText = document.getElementById("password");
//     copyPassText.addEventListener("copy", copyPassword);

//     const hint = document.getElementById("generate-password-button");
//     hint.addEventListener("click", getResponse);

//     const password = document.getElementById("generate-password-button");
//     password.addEventListener("click", getResponse);
// };

// document.addEventListener("DOMContentLoaded", registerEventHandlers);



function getPassword() {
    alert("Test")
}