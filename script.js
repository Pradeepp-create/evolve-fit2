// LOAD CART
function getCart(){
return JSON.parse(localStorage.getItem("cart")) || [];
}

// SAVE CART
function saveCart(cart){
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
updateCart();
}

// ADD TO CART
function addToCart(name, price){

let cart = getCart();

cart.push({
name: name,
price: price
});

saveCart(cart);

updateCartCount();   // add this line

showNotification();

}

// BUY NOW
function buyNow(name, price){

let cart = [{
name:name,
price:price
}];

saveCart(cart);

updateCartCount();   // add this

window.location.href="payment.html";

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

// CART COUNT
function updateCartCount(){

let cart = getCart();

const count = document.getElementById("cartCount");

if(count){
count.innerText = cart.length;
}

}

// NOTIFICATION
function showNotification(){

const note = document.getElementById("cartNotification");

if(!note) return;

note.style.display="block";

setTimeout(()=>{
note.style.display="none";
},2000);

}

// INITIAL LOAD
updateCart();
updateCartCount();

