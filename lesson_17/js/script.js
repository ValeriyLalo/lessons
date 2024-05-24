

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.info-main__icon-burger')) {
		document.documentElement.classList.toggle('menu-open');
	}
})