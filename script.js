let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cart = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const cartCount = document.getElementById("cartCount");

/* ADD TO CART */


function addToCart(name, price){

let existing = cartItems.find(item => item.name === name);

if(existing){
existing.qty = (existing.qty || 1) + 1;
}else{
cartItems.push({name:name, price:price, qty:1});
}

localStorage.setItem("cartItems", JSON.stringify(cartItems));

updateCartCount();
showNotification();

}

/* NOTIFICATION */

const note = document.getElementById("cartNotification");

if(note){

note.style.display="block";

setTimeout(function(){
note.style.display="none";
},2000);

}

}

/* UPDATE CART PAGE */

function updateCart(){

if(!cart) return;

cart.innerHTML="";
let total=0;

cartItems.forEach((item,index)=>{

let qty = item.qty || 1;

total += item.price * qty;

const li=document.createElement("li");

li.innerHTML =
`${item.name} - ₹${item.price} x ${qty}
<button onclick="removeItem(${index})">Remove</button>`;

cart.appendChild(li);

});

if(totalDisplay){
totalDisplay.innerText=total;
}

}

/* REMOVE ITEM */

function removeItem(index){

cartItems.splice(index,1);

localStorage.setItem("cartItems", JSON.stringify(cartItems));

updateCart();
updateCartCount();

}

/* CART COUNT */

function updateCartCount(){

if(!cartCount) return;

let count=0;

cartItems.forEach(item=>{
count += item.qty;
});

cartCount.innerText=count;

}

/* PAYMENT */

function completePayment(e){

e.preventDefault();

alert("Order placed successfully 🎉");

cartItems=[];

localStorage.setItem("cartItems", JSON.stringify(cartItems));

updateCart();
updateCartCount();

}

/* LOAD FUNCTIONS */

updateCart();
updateCartCount();

function buyNow(name,price){

cartItems = [{name:name, price:price, qty:1}];

localStorage.setItem("cartItems", JSON.stringify(cartItems));

window.location.href="payment.html";

}
