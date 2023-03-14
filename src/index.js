import './style.css';

const body = document.querySelector('body');


const formContainer = document.querySelector('.form-container');

const form = document.createElement('form');
form.id = 'book-add';
form.name = 'book-add';

body.appendChild(form);

const fieldset = document.createElement('fieldset');
fieldset.id = 'book-add-fieldset';
fieldset.name = 'book-add-fieldset';

const legend = document.createElement('legend');
legend.textContent = 'Sign Up Here:';
fieldset.appendChild(legend);

// Section generator function
function createBookSection(labelName, inputType, inputId, inputPlaceholder, inputRequired = true ) {
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
	input.placeholder = inputPlaceholder;
	input.required = inputRequired;
	if (inputId === 'number') {
		input.min = 1;
		input.max = 5000;
		input.type = 'number';
	}
	if (inputId === 'title' || inputId === 'author') {
		input.type = 'text';
		input.minLength = 2;
		input.maxLength = 40;
	}
	section.appendChild(input);
}

createBookSection('Email:*', 'input', 'email', 'example@odin.com');
createBookSection('Country:*', 'input', 'author', 'United States');
createBookSection('Zip Code: *', 'input', 'number', 'Enter pages');
createBookSection('Create Password: *', 'input', 'number', 'Enter pages');
createBookSection('Confirm Password: *', 'input', 'number', 'Enter pages');

const formBtn = document.createElement('button');
formBtn.type = 'submit';
formBtn.id = 'btn';
formBtn.name = 'btn';
formBtn.textContent = 'Add Book';
fieldset.appendChild(formBtn);

form.appendChild(fieldset);

