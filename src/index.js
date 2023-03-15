import './style.css';
import form from './signup-form';
import successPage from './highFive';
import test from './formValidation';

// eslint-disable-next-line prefer-const
let submitSuccess = false;

function pageSwitcher(){
    // this will be set by  the sign up button actually working,  even though we aren't submiting a form... I have to figure that out  && the button on the success page to go back and submit another sign up. 

    // when submit happens it should change the submitSuccess flag to true, and when the sign up again button is clicked, it should be set back to false.
}

function displayContainer(){
    
    const body = document.querySelector('body');
    if (submitSuccess) {
        body.appendChild(successPage);
    }
    if (!submitSuccess) {
        body.appendChild(form);
    }
    const allInputs = document.querySelectorAll('input');
    console.log(allInputs)
}
displayContainer()



