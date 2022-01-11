console.log('d');

//Menu burger
console.log('d');
const iconMenu=document.querySelector('.menu__icon');
if(true){
	const bodyMenu=document.querySelector('.menu__body');
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle("_lock")
		iconMenu.classList.toggle("_active");
		bodyMenu.classList.toggle("_active");
	});

};