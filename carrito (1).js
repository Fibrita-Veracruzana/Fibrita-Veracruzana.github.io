const starlista1 = document.querySelectorAll('.addtocart');
starlista1Buttons.forEach((addtocartButton) => {
    addtocartButton.addEventListener('click', addtocartClicked);
});


function addtocartClicked(event) {
    const button = event.target;
    const listanumber = button.closest('.prodc1');

    const name = info1.querySelectorAll('.name').textContent;
    const precio = info1.querySelectorAll('.precio').textContent;
    const image = info1.querySelectorAll('.image').src;

    addItemToShoppingCart(name, precio, image);
}

function starlista1(name, precio, image){
    console.log(name, precio, image);
}