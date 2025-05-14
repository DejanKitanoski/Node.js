function openIt(){
    const url ='http://localhost:10000/kupi'
    window.open(url)
}


let cart = [];

function addToCart(name, price, picture) {
    const cartItem = { name, price: Number(price), picture };
    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; 
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <img src="${item.picture}" alt="${item.name}" style="width: 50px;">
            <span>${item.name} - $${item.price}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
