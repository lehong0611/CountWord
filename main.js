var count = document.querySelector('.count');
var userInput = document.getElementById('userTest');

userInput.addEventListener('keyup', CountWord);

function CountWord() {
	count.textContent = userInput.textContent.split().join().trim().length;

}