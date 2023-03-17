/* eslint-disable no-use-before-define */
// 

export default function lostFocus(field) {

    field.forEach((el) => {
        el.addEventListener('blur', (e) => {
            e.preventDefault();
            whatFieldToTest(e);
            updateSubmitButton(field)
        });
        if (el.id === 'passwordConfirm') {
            updateSubmitButton(field);
        }
        if (el.id === 'btn') {
            el.addEventListener('click', (e) => {
                updateSubmitButton(field);
            });
        }
    }
    );
}


function updateSubmitButton(field) {
    const fieldArray = [...field]

    const allFieldsValid = fieldArray.every((el) => el.validity.valid)
    const submitButton = document.querySelector('#btn');
    // if false, disable button.... 
    if (!allFieldsValid) {
        submitButton.disabled = true;
        submitButton.style.cursor = 'not-allowed';
    } else {
        submitButton.disabled = false;
        submitButton.style.cursor = 'pointer';
    }
}


export function removeDefaultValidationStyling(input) {
    input.forEach((el) => {
        el.style.setProperty('border', 'none');
    });
}

function whatFieldToTest(e) {
    const focusLost = e.target.id;
    if (focusLost === 'email') {
        validateEmail(focusLost)
    }
    if (focusLost === 'country') {
        validateCountry(focusLost)
    }
    if (focusLost === 'zip') {
        validateZip(focusLost)
    }
    if (focusLost === 'password') {
        validateFirstPassword(focusLost)
    }
    if (focusLost === 'passwordConfirm') {
        validateConfirmPassword(focusLost)
    }
}


function validateEmail(el) {
    const formEl = document.querySelector(`#${el}`);
    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        formEl.setCustomValidity("I am expecting an e-mail address!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('email', formEl.validity.valid)
}

function validateCountry(el) {
    const formEl = document.querySelector(`#${el}`);
    if (formEl.validity.valueMissing) {
        formEl.setCustomValidity("Please enter a country!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('country', formEl.validity.valid)
}

function validateZip(el) {
    const formEl = document.querySelector(`#${el}`);
    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        formEl.setCustomValidity("I am expecting a zip code!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('zip', formEl.validity.valid)
}

function validateFirstPassword(el) {
    const formEl = document.querySelector(`#${el}`);

    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        formEl.setCustomValidity("Password at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and at least one symbol and a max length of 27!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.setCustomValidity('');
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
    console.log('pass 1', formEl.validity.valid)
}

function validateConfirmPassword(el) {
    const password = document.querySelector('#password');
    const passwordValue = password.value;
    const passwordConfirm = document.querySelector('#passwordConfirm');
    const passwordConfirmValue = passwordConfirm.value;
    if (passwordValue !== passwordConfirmValue || passwordConfirm.validity.valueMissing) {
        passwordConfirm.setCustomValidity("Passwords do not match!");
        passwordConfirm.style.removeProperty('border');
        passwordConfirm.style.setProperty('border', '8px solid red');
        passwordConfirm.reportValidity();
    } else {
        passwordConfirm.setCustomValidity('');
        passwordConfirm.style.removeProperty('border');
        passwordConfirm.style.setProperty('border', '8px solid green');
    }
    console.log('confirm pass', passwordConfirm.validity.valid)
}






