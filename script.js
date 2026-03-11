let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let total = 0;

const cart = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const paymentSection = document.getElementById("payment-section");
/* ================= ADD TO CART ================= */

function addToCart(name, price) {

cartItems.push({name,price});

localStorage.setItem("cartItems", JSON.stringify(cartItems));

const note = document.getElementById("cartNotification");

note.style.display="block";

setTimeout(()=>{
note.style.display="none";
},2000);

}


/* ================= UPDATE CART ================= */
function updateCart() {

if(!cart || !totalDisplay) return;

cart.innerHTML = "";
total = 0;

cartItems.forEach((item, index) => {

total += item.price;

const li = document.createElement("li");

li.innerHTML = `
<span>${item.name} - ₹${item.price}</span>
<button onclick="removeItem(${index})">Remove</button>
`;

cart.appendChild(li);

});

totalDisplay.innerText = total;

}

/* ================= REMOVE ITEM ================= */
function removeItem(index) {

cartItems.splice(index,1);

localStorage.setItem("cartItems", JSON.stringify(cartItems));

updateCart();

}
/* ================= SHOW PAYMENT ================= */
function showPayment() {

if(!paymentSection) return;

if (cartItems.length === 0) {
alert("Your cart is empty!");
return;
}

paymentSection.style.display = "block";
paymentSection.scrollIntoView({ behavior: "smooth" });

}
/* ================= COMPLETE PAYMENT ================= */
function completePayment(event) {
    event.preventDefault();

    const method = document.getElementById("paymentMethod").value;

    if (!method) {
        alert("Please select payment method");
        return;
    }

    if (method === "cod") {
        alert("Order placed successfully! Pay on Delivery 🚚");
    } else if (method === "upi") {
        alert("UPI Payment Successful 🎉");
    } else {
        alert("Card Payment Successful 💳");
    }

    cartItems = [];
    updateCart();
    paymentSection.style.display = "none";
}

/* ================= SEARCH ================= */
function searchProducts() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.querySelector("h2").innerText.toLowerCase();
        product.style.display = name.includes(input) ? "block" : "none";
    });
}

/* ================= FEEDBACK ================= */
function submitFeedback(event) {
    event.preventDefault();
    alert("Thank you for your feedback ❤️");
    event.target.reset();
}
function goToPayment(){
window.location.href="payment.html";
}
function toggleMenu(){
const menu = document.getElementById("menu");
menu.classList.toggle("show");
}
note.style.display="block";
updateCart();
