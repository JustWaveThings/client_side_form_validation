import './style.css';
import signupForm from './signup-form';
import successPage from './highFive';
import lostFocus, { removeDefaultValidationStyling } from './formValidation';

function displayContainer(bool) {
    const body = document.querySelector('body');
    if (bool) {
        while (body.children.length > 1) {
            body.removeChild(body.children[1]);
        }
        body.appendChild(successPage);
        const signUpAgainButton = document.querySelector('.return-btn');
        
        signUpAgainButton?.addEventListener('click', () => {
            const newFlag = false;
            displayContainer(newFlag);
        });
    }
    if (!bool) {
        while (body.children.length > 1) {
            body.removeChild(body.children[1]);
        }
        body.appendChild(signupForm);
        const form = document.querySelector('form');
        form.reset();   
        const submitButton = document.querySelector('#btn');
        submitButton?.addEventListener('click', (e) => {
            e.preventDefault();
            const newFlag = true;
            displayContainer(newFlag);
        });
        
        
        
    }
}
displayContainer(false);

const input = document.querySelectorAll('input');

removeDefaultValidationStyling(input);
// fires event listener on blur to validate input and apply styling /error message / validation 
lostFocus(input);
