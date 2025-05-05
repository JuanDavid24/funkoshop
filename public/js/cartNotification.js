import { cart, sumCartProducts } from "./cart.js";
const notificationDOM = document.querySelector(".navbar__cart-notification");

if (cart.length) {
  notificationDOM.innerHTML = sumCartProducts(cart);
  notificationDOM.style.display = "inline-block";
} else notificationDOM.style.display = "none";
