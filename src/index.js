import './style.css';
import signupForm from './signup-form';
import successPage from './highFive';

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
        const submitButton = document.querySelector('#btn');
        submitButton?.addEventListener('click', (e) => {
            e.preventDefault();
            const newFlag = true;
            displayContainer(newFlag);
        });
    }
}
displayContainer(false);
