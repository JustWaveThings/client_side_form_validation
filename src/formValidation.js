/* eslint-disable no-use-before-define */

// 

export default function lostFocus(field) {
    field.forEach((el) => {
        el.addEventListener('blur', (e) => {whatFieldToTest(e)});
        console.log(el.name, 'added event listener')
    });
}

export function removeDefaultValidationStyling(input) {
    input.forEach((el) => {
        el.classList.remove('invalid');
        el.classList.remove('valid');
    });
}

function whatFieldToTest(e){
    console.log('what field to test ran')
    const focusLost = e.target.id;
    console.log(focusLost, 'focus lost')

    if (focusLost === 'email') {
        validateEmail(focusLost)
    }
    /* if (focusLost === 'country') {
        validateCountry()
    }
    if (focusLost === 'zip') {
        validateZip()
    }
    if (focusLost === 'password') {
        validateFirstPassword()
    }
    if (focusLost === 'passwordConfirm') {
        validateConfirmPassword()
    } */
}


function validateEmail(el) {
    const email = document.querySelector(`#${el}`);
    console.log(email, 'email validate email grab element')
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
        console.log(`${el.customError} - custom error boolean`)
        console.log(`invalid email - ${el.valid}`)
        email.classList.add('invalid');
    } else {
        email.setCustomValidity("that is an email address");
        console.log(`${el.customError} - custom error boolean`)
        console.log('valid email')
        email.classList.add('valid');
    }
}


/* 
function validateCountry() {
    const country = document.querySelector('#country');
    const countryValue = country.value;
    const countryRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (countryRegex.test(countryValue)) {
        console.log('valid country');
        country.classList.add('valid');
        
    } else {
        console.log('invalid country');
        country.classList.add('invalid');
    }

}

function validateZip() {
    const zip = document.querySelector('#zip');
    const zipValue = zip.value;
    const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
    if (zipRegex.test(zipValue)) {
        zip.classList.add('valid');
        zip.classList.remove('invalid');
    } else {
        zip.classList.add('invalid');
        zip.classList.remove('valid');
    }
}

function validateFirstPassword() {
    const password = document.querySelector('#password');
    const passwordValue = password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d(?=.*[@$!%*?&]))[A-Za-z\d@$!%*?&]{8,27}$/
    if (passwordRegex.test(passwordValue)) {
        console.log('valid password')
        password.classList.add('valid');
        password.classList.remove('invalid');
    } else {
        console.log('invalid password')
        password.classList.add('invalid');
        password.classList.remove('valid');
    }
}

function validateConfirmPassword() {
    const password = document.querySelector('#password');
    const passwordValue = password.value;
    const passwordConfirm = document.querySelector('#passwordConfirm');
    const passwordConfirmValue = passwordConfirm.value;
    if (passwordValue === passwordConfirmValue) {
        console.log('passwords match')
        passwordConfirm.classList.add('valid');
        passwordConfirm.classList.remove('invalid');
    } else {
        console.log('passwords do not match')
        passwordConfirm.classList.add('invalid');
        passwordConfirm.classList.remove('valid');
    }
} */




