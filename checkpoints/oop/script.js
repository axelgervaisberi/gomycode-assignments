// Product class to store id, name, and price
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Shopping cart item class to store product and quantity
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Calculate total price of this item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Shopping cart class to manage the items
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold ShoppingCartItem instances
    }

    // Get the total of all items in the cart
    getTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.getTotalPrice();
        }
        return total;
    }

    // Add items to the cart
    addItem(product, quantity) {
        // Check if item is already in the cart
        let found = this.items.find(item => item.product.id === product.id);
        if (found) {
            found.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Remove items from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Display cart items in the console
    displayCart() {
        console.log("Cart Items:");
        for (let item of this.items) {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);
        }
        console.log(`Cart Total: $${this.getTotal()}`);
    }
}

// Create some products
const product1 = new Product(1, "Laptop", 1000);
const product2 = new Product(2, "Mouse", 20);
const product3 = new Product(3, "Keyboard", 50);

// Create a shopping cart
const cart = new ShoppingCart();

// Test the objects in the console as required
console.log("--- Testing Objects ---");
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.displayCart();

console.log("Removing Mouse...");
cart.removeItem(2);
cart.displayCart();

// --- Connect to HTML DOM ---
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");

// Array of available products
const availableProducts = [product1, product2, product3];

// Display products on the page
function renderProducts() {
    availableProducts.forEach(product => {
        let div = document.createElement("div");
        div.className = "product-item";
        div.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})"><i class="fa-solid fa-plus"></i> Add</button>
        `;
        productList.appendChild(div);
    });
}

// Add item to cart from button
function addToCart(id) {
    let product = availableProducts.find(p => p.id === id);
    cart.addItem(product, 1);
    renderCart();
}

// Remove item from cart from button
function removeFromCart(id) {
    cart.removeItem(id);
    renderCart();
}

// Update the cart display on the page
function renderCart() {
    cartItems.innerHTML = ""; // Clear current items
    cart.items.forEach(item => {
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <span>${item.product.name} (x${item.quantity})</span>
            <span>$${item.getTotalPrice()}</span>
            <button class="remove" onclick="removeFromCart(${item.product.id})"><i class="fa-solid fa-trash"></i></button>
        `;
        cartItems.appendChild(div);
    });
    cartTotalPrice.innerText = cart.getTotal();
}

// Initialize the page
renderProducts();
renderCart();
