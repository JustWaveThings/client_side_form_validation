
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


function createFormSection(labelName, inputType, inputName, inputId, inputPlaceholder, autocomplete, pattern, inputRequired = true ) {
	const section = document.createElement('div');
	section.classList.add('form-control');
	fieldset.appendChild(section);

	const label = document.createElement('label');
	label.textContent = labelName;
	label.setAttribute('for', inputId);
	section.appendChild(label);

	const input = document.createElement('input');
	input.id = inputId;
	input.name = inputName;
	input.type = inputType;
	input.placeholder = inputPlaceholder;
	input.required = inputRequired;
	input.autocomplete = autocomplete;
	input.pattern = pattern;
	
	if (labelName === 'Zip Code*:') {
		input.inputmode = 'numeric';
	}	
	section.appendChild(input);
}

createFormSection('Email*:', 'email', 'email', 'email', 'example@odin.com', 'email', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
createFormSection('Country*:', 'text', 'country', 'country', 'United States', 'country', '^[a-zA-Z\\s]*$');
createFormSection('Zip Code*:', 'text', 'zip', 'zip', '00000', 'postal-code', '\\d{5}', '11111');
createFormSection('Create Password*:', 'password', 'password', 'password', 'Create Unique Password', 'new-password', '^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$');
createFormSection('Confirm Password*:', 'password', 'passwordConfirm', 'passwordConfirm', 'Confirm Password', 'new-password', '^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$'); 

const formBtn = document.createElement('input');
formBtn.type = 'submit';
formBtn.id = 'btn';
formBtn.name = 'btn';
formBtn.textContent = 'Sign Up Now';
/* formBtn.disabled = true;
formBtn.style.cursor = 'not-allowed'; */
fieldset.appendChild(formBtn);
form.appendChild(fieldset);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	form.clear()
})


return form;
})()

export default signupForm;

