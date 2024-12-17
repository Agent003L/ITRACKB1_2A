// =============== IF CLICK SEARCH BUTTON ===============

let search = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
	search.classList.toggle('active');
	signInForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
}

// =============== IF CLICK CART BUTTON ===============

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
	shoppingCart.classList.toggle('active');
	signInForm.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

let signInForm = document.querySelector('.form');

document.querySelector('#login-btn').onclick = () =>{
	signInForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
	navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
	signInForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	searchForm.classList.remove('active');
}

// =============== LOGIN POPUP ===============

document.querySelector("#show-login").addEventListener("click",function(){
	document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
	document.querySelector(".popup").classList.remove("active");
});


// =============== SIGNUP POPUP ===============

document.querySelector('#show-signup').addEventListener("click",function() {
	document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .close-btn").addEventListener("click",function(){
	document.querySelector(".popup2").classList.remove("active");
});

// ============ BACK BUTTON ===================

function goBack() {
	window.history.back();
}

// ============ IF SCROLL, THE FORM WILL DISAPPEAR ============

window.onscroll = () =>{
	signInForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	search.classList.remove('active');
	navbar.classList.remove('active');
}




