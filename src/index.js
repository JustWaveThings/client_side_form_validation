import './style.css';
import form from './signup-form';
import submitSuccessContainer from './highFive';


// eslint-disable-next-line prefer-const
let success = false;

(function displayContainer(container){
    const body = document.querySelector('body');
    if (container) {
        body.appendChild(submitSuccessContainer);
    }
    if (!container) {
        body.appendChild(form);
    }
   
})(success)



