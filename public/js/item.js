const addToCartBtn = document.querySelector('.item__submit-btn');

addToCartBtn.addEventListener("click", (event)=> {
    event.preventDefault();
    const quantity = Number(document.forms["item__form"]["item__quantity"].value);
    const item = {
        "product": JSON.parse(sessionStorage.getItem("currentItem")),
        "quantity": quantity
    };
    addToCart(item);
    item.quantity > 1 ?
        toast.success(`¡Se agregaron ${item.quantity} items al carrito!`, 4000)
       :toast.success(`¡Se agregó 1 item al carrito!`, 4000) 
});

const addToCart = (item) => {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    if (cart) {
        let foundIndex = findItemIndexInCart(item, cart);
        foundIndex != -1 ? 
            addItemQuantity(cart, foundIndex, item.quantity)
            : 
            cart.push(item);
    }
    else 
        cart = [item];
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

const findItemIndexInCart = (newItem, cart) => {
    const foundIndex = cart.findIndex( item => item.product.product_id === newItem.product.product_id );
    return foundIndex
}

const addItemQuantity = (cart, index, quantity) => cart[index].quantity = +cart[index].quantity + +quantity