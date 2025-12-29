function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    const item = cart.find(p => p.id === product.id);

    if (item) {
        item.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart(cart);
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    const el = document.getElementById("cart-count");
    if (el) el.textContent = totalQty;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
