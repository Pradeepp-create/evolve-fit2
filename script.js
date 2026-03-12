// GLOBAL CART
let cart = [];

// GET CART
function getCart(){
return cart;
}

// SAVE CART
function saveCart(newCart){
cart = newCart;
updateCart();
updateCartCount();
}

// ADD TO CART
function addToCart(name, price){

cart.push({
name:name,
price:price
});

updateCartCount();
showCartNotification(name);

}

// BUY NOW
function buyNow(name, price){

cart = [{
name:name,
price:price
}];

window.location.href = "payment.html";

}

// REMOVE ITEM
function removeItem(index){

cart.splice(index,1);

updateCart();
updateCartCount();

}

// UPDATE CART PAGE
function updateCart(){

const cartList = document.getElementById("cart");
const totalDisplay = document.getElementById("total");

if(!cartList) return;

cartList.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

let li = document.createElement("li");

total += item.price;

li.innerHTML = `
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">Remove</button>
`;

cartList.appendChild(li);

});

if(totalDisplay){
totalDisplay.innerText = total;
}

}

// UPDATE CART COUNT
function updateCartCount(){

let countElement = document.getElementById("cartCount");

if(countElement){
countElement.textContent = cart.length;
}

}

// CART NOTIFICATION
function showCartNotification(product){

let notification = document.getElementById("cartNotification");
let text = document.getElementById("cartText");

text.innerText = product + " added to cart";

notification.classList.add("show");

setTimeout(()=>{
notification.classList.remove("show");
},3000);

}

// FEEDBACK
function submitFeedback(e){

e.preventDefault();

alert("Thank you for your feedback! 💜");

e.target.reset();

}

// PAYMENT
function completePayment(e){

e.preventDefault();

alert("Order placed successfully 🎉");

cart = [];

updateCartCount();

window.location.href="index.html";

}

// MOBILE MENU
function toggleMenu(){

const menu = document.getElementById("menu");
const burger = document.querySelector(".hamburger");

menu.classList.toggle("menu-open");
burger.classList.toggle("active");

}

// HERO SLIDER

let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(changeSlide,4000);

// PAGE LOAD
document.addEventListener("DOMContentLoaded", function(){

updateCart();
updateCartCount();

});
