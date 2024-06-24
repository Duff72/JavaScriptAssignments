function initializeCart() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
};

function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
};

function removeItem(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
};

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
};

document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let item = {
      id: Date.now(), // Using timestamp as unique id for simplicity
      name: this.itemName.value,
      price: parseFloat(this.itemPrice.value)
    };
    addItem(item);
    displayCart();
});

document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
});