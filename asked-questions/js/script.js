const box = document.querySelectorAll('.c-btn__open-close');


box.forEach(toggle => {
	toggle.addEventListener('click', () => {
		toggle.parentNode.classList.toggle('active');
        
	});
});