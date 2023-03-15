import colbert from './images/colbert_high_five.gif';



function createImage(src, alt,  width = '600', height = '400', ) {
	const img = new Image();
	img.src = src;
	img.alt = alt;
	img.width = width;
	img.height = height;
	return img;
}

const successPage = (() => {

const submitSuccessContainer = document.createElement('div');
submitSuccessContainer.classList.add('submit-success-container');

const highFiveImage = createImage(colbert, 'Stephen Colbert High Five', '600', '400');
submitSuccessContainer.appendChild(highFiveImage);

const returnMessage = document.createElement('h2');
returnMessage.textContent = 'You have successfully signed up!';
submitSuccessContainer.appendChild(returnMessage);

const returnMessage2 = document.createElement('button');
returnMessage2.textContent = 'Sign Up Again?';
submitSuccessContainer.appendChild(returnMessage2);

return submitSuccessContainer;
})();  


export default successPage;


