// wrap in iffe
const signupForm = (() => {

const form = document.createElement('form');
form.id = 'Sign-up-form';
form.name = 'Sign-up-form';
form.noValidate= true;


const fieldset = document.createElement('fieldset');
fieldset.id = 'signup-fieldset';
fieldset.name = 'signup-fieldset';

const legend = document.createElement('legend');
legend.textContent = 'Sign Up Here:';
fieldset.appendChild(legend);


function createFormSection(labelName, inputType, inputId, inputPlaceholder, autocomplete, inputRequired = false ) {
	const section = document.createElement('div');
	section.classList.add('form-control');
	fieldset.appendChild(section);

	const label = document.createElement('label');
	label.textContent = labelName;
	label.setAttribute('for', inputId);
	section.appendChild(label);

	const input = document.createElement(inputType);
	input.id = inputId;
	input.name = inputId;
	input.type = inputType;
	input.placeholder = inputPlaceholder;
	input.required = inputRequired;
	input.autocomplete = autocomplete;
	if (labelName === 'Zip Code*:') {
		input.inputmode = 'numeric';
	}	
	if (inputId === 'country') {
		input.type = 'text';
	}
	if (labelName === 'Confirm Password*:') {
		input.type = 'password';
	}
	section.appendChild(input);
	// error message
	const error = document.createElement('span');
	error.classList.add(`${inputId}-error`);
	error.style.display = 'none';
	error.ariaLive = 'polite';
	section.appendChild(error);

}

createFormSection('Email*:', 'input', 'email', 'example@odin.com', 'email');
/* createFormSection('Country*:', 'input', 'country', 'United States', 'country');
createFormSection('Zip Code*:', 'input', 'zip', '00000', 'postal-code');
createFormSection('Create Password*:', 'input', 'password', 'Create Unique Password', 'new-password');
createFormSection('Confirm Password*:', 'input', 'passwordConfirm', 'Confirm Password', 'new-password'); */

const formBtn = document.createElement('input');
formBtn.type = 'submit';
formBtn.id = 'btn';
formBtn.name = 'btn';
formBtn.textContent = 'Sign Up Now';
fieldset.appendChild(formBtn);

form.appendChild(fieldset);

return form;
})()

export default signupForm;

