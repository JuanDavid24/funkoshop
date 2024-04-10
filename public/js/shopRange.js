import { shopFilters, arrangedItems } from "./shop.js";

const minInput = document.querySelector('.filter__min');
const maxInput = document.querySelector('.filter__max');

// ------------------------------ Manejo inputs ------------------------------
const setValoresIniciales = (min, max) => {
    min.value = shopFilters.min || 0;
    max.value = shopFilters.max || getPrecioMax ();
}

const validarInput= ( input, fnValidacion, defaultValue=0 ) => {
    let valor = parseInt(input.value);
    if (!isNaN(valor))
        input.value = fnValidacion(valor) ? valor : shopFilters[(getTipoInput(input))];  
    else input.value = defaultValue
}

// ------------------------------Event listeners------------------------------
minInput.addEventListener('change', (event) => {
   validarInput(event.target, validacionMin);
   shopFilters.min = event.target.value;
   sessionStorage.setItem('shopFilters', JSON.stringify(shopFilters));
});

maxInput.addEventListener('change', (event) => {
    validarInput(event.target, validacionMax, getPrecioMax());
    shopFilters.max = event.target.value;
    sessionStorage.setItem('shopFilters', JSON.stringify(shopFilters));
});

setValoresIniciales(minInput, maxInput);

// ------------------------------ Aux ------------------------------
const getPrecioMax = () => {
    let maxPrice = 0;
    for (let item of arrangedItems)
        if (maxPrice < item.price) maxPrice = item.price;
    return Math.ceil(maxPrice)
}

const getTipoInput = input => input.classList[0].slice(-3);

const validacionMin = min => min >= 0 && min <= parseInt(maxInput.value); 
const validacionMax = max => max > 0 && max >= parseInt(minInput.value);