console.log(`I was loaded at ${Date(Date.now()).toString()}`);

var button = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');


button.addEventListener('click', () => {
	menu.classList.toggle('hidden');
});
