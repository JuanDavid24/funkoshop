const cart = JSON.parse(sessionStorage.getItem('cart'));
const cartSummaryDOM = document.querySelector('.cart__summary');
const cartContentDOM = document.querySelector('.cart__content')


// Muestra items del carrito en la vista
const renderCart = () => {
  if (cart) {
    cart.forEach(( item, index ) => cartContentDOM.innerHTML += createItemElement(item, index));
    cartSummaryDOM.innerHTML += createSummaryElement(cart);
  }
  else
    cartContentDOM.innerHTML = "<h3>El carrito está vacío</h3>";
}

// devuelve DOMelement de un item del carrito
const createItemElement = (item, index) => {
  return ` <article class="cart__product" index= ${index}>
    <section class="product__card">
        <picture class="product__cover">
            <img src="${item.product.image_front}" alt="baby yoda">
        </picture>
        <div class="product__description">
            <div class="product__description--header">
                <h3 class="product__name"> ${item.product.product_name.toUpperCase()} </h3>
                <p class="product__license"> ${item.product.licence_name.toUpperCase()} </p>
            </div>
            <p class="product__price">Precio: <span class="currency">${item.product.price}</span></p>
        </div>
    </section>
    
    <div class="product__quantity-container">
        <input class="product__quantity quantity-input" type="number" onchange="itemQuantityChanged(this)" value= ${item.quantity} min="0">
        <div class="item__btn-col btn-col">
            <button class="product__quantity-btn quantity-btn quantity-btn--add" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 12 12"><path fill="currentColor" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z"/></svg>
    
            </button>
            <button class="product__quantity-btn quantity-btn quantity-btn--substract" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z"/></svg>
            </button>
        </div>
    </div>
    
    <p class="product__total-price currency" > ${getTotalItemPrice(item.product.price, item.quantity)} </p>
    
    <button class="product__delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="currentColor" d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"/></svg>
    </button>
    </article>`;
}

// devuelve DOMelement del summary del carrito
const createSummaryElement = cart => {
  const cartTotalPrice = getCartTotalPrice(cart);
  return `
  <h2 class="summary__title">RESUMEN</h2>
  <article class="summary__content">
      <div class="summary__items">
          <p class="summary__concept">CANTIDAD DE ELEMENTOS</p>
          <p class="summary__mount"> ${sumCartProducts(cart)} </p>
          <p class="summary__concept">SUBTOTAL</p>
          <p class="summary__mount currency"> ${cartTotalPrice} </p>
          <p class="summary__concept">ENVIO</p>
          <p class="summary__mount currency">0,00</p>
      </div>
      <div class="summary__total">
          <p class="summary__concept">TOTAL</p>
          <p class="summary__mount currency"> ${cartTotalPrice} </p>
      </div>
  </article>
  <button class="btn-primary summary__go-pay">IR A PAGAR</button>`
}

// devuelve la cantidad total de productos del carrito
const sumCartProducts = cart => {
  let sum = 0;
  cart.forEach(product => {
    sum += product.quantity;
  });
  return sum
}

// devuelve el precio total del carrito
const getCartTotalPrice = cart => {
  let sum = 0;
  cart.forEach(product => {
    sum += product.quantity * product.product.price
  });
  return convertCurrency(sum)
}

// Se ejecuta cuando el quantity-input cambia
const itemQuantityChanged = input => {
  const productContainerDOM = input.parentElement.parentElement;
  const index = productContainerDOM.getAttribute('index');
  const productTotalPriceDOM = productContainerDOM.querySelector(".product__total-price");

  // actualizo cantidad del producto en el carrito y guardo
  setItemQuantity (cart, index, input.value)
  sessionStorage.setItem("cart", JSON.stringify(cart))

  // actualizo precio total del producto en la vista
  productTotalPriceDOM.innerHTML = getTotalItemPrice(cart[index].product.price, input.value);
  
  // actualizo summary
  cartSummaryDOM.innerHTML = createSummaryElement(cart)
}

// Suma una cantidad a un item en el carrito
const setItemQuantity = (cart, index, quantity) => cart[index].quantity = +quantity;

// Calcula precio total de un producto del carrito
const getTotalItemPrice = (unitPrice, quantity) => 
  convertCurrency(unitPrice * quantity)

renderCart()