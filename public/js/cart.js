let inputs = document.querySelectorAll(".quantity-input");

inputs.forEach(input => input.addEventListener( "change", () => {
  const totalPriceDOM = input.parentElement.parentElement.querySelector(".product__total-price");
  const unitPriceDOM = input.parentElement.parentElement.querySelector(".product__price > .currency");
  const unitPrice = parseFloat(unitPriceDOM.textContent.replace(/[^\d.-]/g, ''))

  console.log(`precio uniterio ${unitPrice}`);

  console.log(`precio convertido ${convertCurrency(unitPrice * input.value)}`);
  totalPriceDOM.innerHTML =  convertCurrency(unitPrice * input.value)
  console.log(`precio total actualizado de producto ${parseFloat(totalPriceDOM.innerHTML)}`);

  console.log(`precio total actualizado de producto ${parseFloat(totalPriceDOM.innerHTML)}`);
}));