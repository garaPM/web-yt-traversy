const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
btn.addEventListener('mouseout', (e) => {
	e.preventDefault();
	document.querySelector('#my-form').style.background = '#ccc'
	document.querySelector('body').classList.add('bg-dark');
	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Prueba</h1>';
});
