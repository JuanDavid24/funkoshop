const convertCurrency = amount => {return amount.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 }) }

let amounts = document.querySelectorAll(".currency");

const formatPriceList = priceList => {
    priceList.forEach(element => {
        element.innerHTML = convertCurrency(parseFloat(element.innerHTML))
    });
}

window.addEventListener('load', () => {
    formatPriceList(amounts)
});

amounts.forEach(element => element.addEventListener( 'change', () => {
    formatPriceList([element])
}));
