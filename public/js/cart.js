let inputs = document.querySelectorAll(".quantity-input");

const calcularPrecios = inputs => {
  inputs.forEach(input => input.addEventListener( "change", () => {
    const totalPriceDOM = input.parentElement.parentElement.querySelector(".product__total-price");
    const unitPriceDOM = input.parentElement.parentElement.querySelector(".product__price > .currency");
    const unitPrice = parseFloat(unitPriceDOM.textContent.replace(/[^\d.-]/g, ''))
    totalPriceDOM.innerHTML =  convertCurrency(unitPrice * input.value)
  }));
}