const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passError');

const button = document.querySelector('#button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName);
});

function validateEmpty(valueInput, divInput){
    if(valueInput.length == 0){
        showError(divInput);
    }else {
        hideError();
    }
}

function showError(divInput){
    divInput.style.border = '1px solid red';
}