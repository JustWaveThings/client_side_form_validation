// wrap in iffe
const signupForm = (() => {

const form = document.createElement('form');
form.id = 'Sign-up-form';
form.name = 'Sign-up-form';


const fieldset = document.createElement('fieldset');
fieldset.id = 'book-add-fieldset';
fieldset.name = 'book-add-fieldset';

const legend = document.createElement('legend');
legend.textContent = 'Sign Up Here:';
fieldset.appendChild(legend);


function createFormSection(labelName, inputType, inputId, inputName, inputPlaceholder, autocomplete, inputRequired = true ) {
	const section = document.createElement('div');
	section.classList.add('form-control');
	fieldset.appendChild(section);

	const label = document.createElement('label');
	label.textContent = labelName;
	label.setAttribute('for', inputId);
	section.appendChild(label);

	const input = document.createElement(inputType);
	input.id = inputId;
	input.name = inputName;
	input.placeholder = inputPlaceholder;
	input.required = inputRequired;
	input.autocomplete = autocomplete;
	if ( labelName === 'Zip Code*:') {
		input.inputmode = 'numeric';
	}	
    if (inputId === 'password' || labelName === 'Confirm Password*:') {
        input.type = 'password';
    }
	
	if (inputId === 'email' || inputId === 'country') {
		input.type = 'text';
	}
	section.appendChild(input);
}

createFormSection('Email:*', 'input', 'email', 'email', 'example@odin.com', 'email');
createFormSection('Country*:', 'input', 'country', 'country', 'United States', 'country');
createFormSection('Zip Code*:', 'input', 'zip', 'zip', '00000', 'postal-code');
createFormSection('Create Password*:', 'input', 'password', 'password', 'Create Unique Password', 'new-password');
createFormSection('Confirm Password*:', 'input', 'passwordConfirm', 'password', 'Confirm Password', 'new-password');

const formBtn = document.createElement('button');
formBtn.type = 'submit';
formBtn.id = 'btn';
formBtn.name = 'btn';
formBtn.textContent = 'Sign Up Now';
fieldset.appendChild(formBtn);

form.appendChild(fieldset);

return form;
})()

export default signupForm;

