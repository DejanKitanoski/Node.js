function openIt(){
    const url ='http://localhost:10000/kupi'
    window.open(url)
}
// var addItemid = 0
// function addToCart(item){
//     addItemid += 1
//     var selectedItem = document.createElement('div')
//     selectedItem.classList.add('cartImg')
//     selectedItem.setAttribute('id',addItemid)
//     var img = document.createElement('img')
//     img.setAttribute('src',item.children[0].currentSrc)
//     var cartItems = document.getElementById('title')
//     selectedItem.append('img')
//     cartItems.append(selectedItem)

// }
// let cart = [];

// function addToCart(name, price, picture) {
//     const cartItem = { name, price, picture };
//     cart.push(cartItem);
//     updateCart();
// }

// function updateCart() {
//     const cartContainer = document.getElementById("cart");
//     cartContainer.innerHTML = "<h2>Shopping Cart</h2>";

//     if (cart.length === 0) {
//         cartContainer.innerHTML += "<p>Your cart is empty.</p>";
//         return;
//     }

//     cart.forEach((item, index) => {
//         cartContainer.innerHTML += `
//             <div class="cart-item">
//                 <img src="${item.picture}" alt="${item.name}" style="width: 50px;">
                
//                 <button onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//     });
// }

// function removeFromCart(index) {
//     cart.splice(index, 1);
//     updateCart();
// }
let cart = [];

function addToCart(name, price, picture) {
    const cartItem = { name, price, picture };
    cart.push(cartItem);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "<h2>Shopping Cart</h2>";

    if (cart.length === 0) {
        cartContainer.innerHTML += "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item, index) => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.picture}"  style="width: 50px;">
                <span>${item.name} </span>
                <span></span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
