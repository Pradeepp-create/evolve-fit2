document.addEventListener("DOMContentLoaded", function(){

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const cart = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const cartCount = document.getElementById("cartCount");

/* ADD TO CART */

function addToCart(name, price){

let item = cartItems.find(p => p.name === name);

if(item){
item.qty += 1;
}else{
cartItems.push({
name:name,
price:price,
qty:1
});
}

saveCart();
showNotification();

}

/* BUY NOW */

function buyNow(name, price){

cartItems = [{
name:name,
price:price,
qty:1
}];

saveCart();

window.location.href="payment.html";

}

/* SAVE CART */

function saveCart(){

localStorage.setItem("cartItems", JSON.stringify(cartItems));

/* reload fresh cart from storage */
cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

updateCart();
updateCartCount();

}

/* UPDATE CART */

function updateCart(){

if(!cart) return;

cart.innerHTML="";

let total=0;

cartItems.forEach((item,index)=>{

let li=document.createElement("li");

total += item.price * item.qty;

li.innerHTML =
item.name + " - ₹" + item.price + " x " + item.qty +
` <button onclick="removeItem(${index})">Remove</button>`;

cart.appendChild(li);

});

if(totalDisplay){
totalDisplay.innerText = total;
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

/* NOTIFICATION */

function showNotification(){

const note=document.getElementById("cartNotification");

if(!note) return;

note.style.display="block";

setTimeout(()=>{
note.style.display="none";
},2000);

}

/* PAYMENT */

function completePayment(e){

e.preventDefault();

alert("Order placed successfully 🎉");

cartItems=[];

saveCart();

}

/* LOAD */

updateCart();
updateCartCount();

/* MAKE BUTTON FUNCTIONS GLOBAL */

window.addToCart=addToCart;
window.buyNow=buyNow;
window.removeItem=removeItem;

});

