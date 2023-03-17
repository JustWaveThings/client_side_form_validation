/* eslint-disable no-use-before-define */

// 


export default function lostFocus(field) {

    field.forEach((el) => {
        if (el.id === 'btn') {
            el.addEventListener('focus', (e) => {
                updateSubmitButton(field);
            });
        } else {
            el.addEventListener('blur', (e) => { 
                e.preventDefault();
                whatFieldToTest(e) 
                displayReportValidity(e.target)
                updateSubmitButton(field);
            });
        }
})
}

function displayReportValidity(inputEl) {
    console.log(inputEl.validity)
    inputEl.preventDefault()
    inputEl.reportValidity()
}

function updateSubmitButton(field) {
    const button = document.querySelector('#btn');
    button.disabled = !allValid;

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
        const message = formEl.setCustomValidity("I am expecting an e-mail address!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
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
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
 console.log('zip', formEl.validity.valid)
}

function validateFirstPassword(el) {
    const formEl = document.querySelector(`#${el}`);

    if (formEl.validity.patternMismatch || formEl.validity.valueMissing) {
        const message = formEl.setCustomValidity("Password at least 8 characters long, at least 1 uppercase letter, 1 lowercase letter, and at least one symbol and a max length of 27!");
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid red');
        formEl.reportValidity();
    } else {
        formEl.style.removeProperty('border');
        formEl.style.setProperty('border', '8px solid green');
    }
 console.log('pass 1', formEl.validity.valid)
 console.log('pass 1', formEl.validity)
}

function validateConfirmPassword(el) {
    const password = document.querySelector('#password');
    const passwordValue = password.value;
    const passwordConfirm = document.querySelector('#passwordConfirm');
    const passwordConfirmValue = passwordConfirm.value;
    console.log({ passwordValue, passwordConfirmValue })
    if (passwordValue !== passwordConfirmValue || passwordConfirm.validity.valueMissing) {
        passwordConfirm.setCustomValidity("Passwords do not match!");
        passwordConfirm.style.removeProperty('border');
        passwordConfirm.style.setProperty('border', '8px solid red');
        passwordConfirm.reportValidity();
    } else {
        passwordConfirm.style.removeProperty('border');
        passwordConfirm.style.setProperty('border', '8px solid green');
    }
    console.log('confirm pass', passwordConfirm.validity)
}






