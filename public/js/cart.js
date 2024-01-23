const cart = JSON.parse(sessionStorage.getItem('cart'));

// Muestra items del carrito en la vista
const renderCart = () => {
    const cartContentDOM = document.querySelector('.cart__content')
    cart ? 
      cart.forEach(( item, index ) => renderItem(item, index, cartContentDOM)) 
      :
      cartContentDOM.innerHTML = "<h3>El carrito está vacío</h3>";
}

// Dibuja un item en la vista de carrito
const renderItem = (item, index, cartContentDOM) => {
  let cartProductDOM = ` <article class="cart__product" index= ${index}>
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
    
    <p class="product__total-price currency" > ${item.product.price * item.quantity} </p>
    
    <button class="product__delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="currentColor" d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"/></svg>
    </button>
    </article>`
  cartContentDOM.innerHTML += cartProductDOM;
}

// Se ejecuta cuando el quantity-input cambia
itemQuantityChanged = input => {
  const productContainerDOM = input.parentElement.parentElement;
  const index = productContainerDOM.getAttribute('index');
  const totalPriceDOM = productContainerDOM.querySelector(".product__total-price");

  // actualizo cantidad del producto en el carrito y guardo
  setItemQuantity (cart, index, input.value)
  sessionStorage.setItem("cart", JSON.stringify(cart))
  
  // actualizo precio total del producto en la vista
  renderTotalItemPrice(cart[index].product.price, input.value, totalPriceDOM)
}

// Suma una cantidad a un item en el carrito
const setItemQuantity = (cart, index, quantity) => cart[index].quantity = +quantity;

const renderTotalItemPrice = (unitPrice, quantity, elementDOM) => 
  elementDOM.innerHTML = convertCurrency(unitPrice * quantity);

renderCart()