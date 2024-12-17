// ========== THE ITEM COUNT WILL UPDATE WHEN THE ADD TO CART BUTTON IS CLICKED =======

const buttons = document.querySelectorAll(".add-cart");
buttons.forEach((button) => 
{
	button.addEventListener("click", () => {
		const counter = document.getElementById("itemCounter");
		counter.innerText = parseInt(counter.innerText) + 1;
	});
});



// document.addEventListener('DOMContentLoaded', () =>  {
// 	const addToCartButton = document.getElementById('add-to-cart');
// 	const itemCounterElement = document.getElementById('itemCounter');

// 	let itemCounter = 0;

// 	addToCartButton.addEventListener('click', (event) => {
// 		event.preventDefault();
// 		itemCounter += 1;
// 		itemCounterElement.textContent = itemCounter;
// 	});
// });