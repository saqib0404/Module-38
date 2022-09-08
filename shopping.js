
const getInputValueById = (id) => {
    const inputfield = document.getElementById(id);
    const fieldValue = inputfield.value;
    inputfield.value = ``;
    return fieldValue;
}

const addToCart = () => {
    const product = getInputValueById('product-name-field')
    const quantity = getInputValueById('quantity-field')
    // console.log(product, quantity);
    displayCart(product, quantity);
    addToLocalStorage(product, quantity)
}

const getFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}

const addToLocalStorage = (product, quantity) => {
    const cart = getFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart)

    localStorage.setItem('cart', cartStringified);
}

const displayCart = (product, quantity) => {
    const cartContainer = document.getElementById('cart-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    cartContainer.appendChild(li);
}

const displayPreviousAdddedCart = () => {
    const cart = getFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        // console.log(product, quantity)
        displayCart(product, quantity);
    }
}
displayPreviousAdddedCart();