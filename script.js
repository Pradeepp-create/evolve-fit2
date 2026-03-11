// GET CART FROM STORAGE
function getCart(){
return JSON.parse(localStorage.getItem("cart")) || [];
}

// SAVE CART
function saveCart(cart){
localStorage.setItem("cart", JSON.stringify(cart));
updateCart();
updateCartCount();
}

// ADD TO CART
function addToCart(name, price){

let cart = getCart();

cart.push({
name: name,
price: price
});

saveCart(cart);
showNotification();

}

// BUY NOW
function buyNow(name, price){

let cart = [{
name: name,
price: price
}];

saveCart(cart);

window.location.href = "payment.html";

}

// REMOVE ITEM
function removeItem(index){

let cart = getCart();

cart.splice(index,1);

saveCart(cart);

}

// UPDATE CART PAGE
function updateCart(){

let cart = getCart();

const cartList = document.getElementById("cart");
const totalDisplay = document.getElementById("total");

if(!cartList) return;

cartList.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

let li = document.createElement("li");

total += item.price;

li.innerHTML =
`${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">Remove</button>`;

cartList.appendChild(li);

});

if(totalDisplay){
totalDisplay.innerText = total;
}

}

// UPDATE CART COUNT
function updateCartCount(){

let cart = getCart();

let countElement = document.getElementById("cartCount");

if(countElement){
countElement.textContent = cart.length;
}

}

// CART NOTIFICATION
function showNotification(){

const note = document.getElementById("cartNotification");

if(!note) return;

note.style.display = "block";

setTimeout(()=>{
note.style.display = "none";
},2000);

}

function submitFeedback(e){

e.preventDefault();

alert("Thank you for your feedback! 💜");

e.target.reset();

}

function completePayment(e){

e.preventDefault();

alert("Order placed successfully 🎉");

localStorage.removeItem("cart");

updateCartCount();

window.location.href="index.html";
}
function toggleMenu(){

let menu = document.getElementById("menu");

menu.classList.toggle("showMenu");

}
// RUN AFTER PAGE LOAD
document.addEventListener("DOMContentLoaded", function(){

updateCart();
updateCartCount();

});




