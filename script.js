var alertBox=document.querySelector('.alertBox')

function copyPassword(){
    var copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertBox.classList.toggle('active');
}