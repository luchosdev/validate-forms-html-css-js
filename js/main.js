const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#passInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button = document.querySelector('#button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validatePassword(password.value, password, passError);
    validateEmail(emailAddress.value, emailAddress, emailAddressError);
});

function validateEmail(valueInput, divInput, divError) {
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'Looks like this is not an email');
    }
}

function validatePassword(valueInput, divInput, divError) {
    let regExp = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'This is not a valid Password');
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);
    }else {
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="">
    <p class="error">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}