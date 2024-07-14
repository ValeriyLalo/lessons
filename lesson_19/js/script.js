

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.social__burger-icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})


