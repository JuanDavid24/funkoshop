import { shopFilters, updateShopFilters, arrangedItems, filterAndSort } from "./shop.js";
export const minInput = document.querySelector('.filter__min');
export const maxInput = document.querySelector('.filter__max');

// ------------------------------ Manejo inputs ------------------------------
export const initializeRangeFields = (min, max) => {
    min.value = shopFilters.min || 0;
    max.value = shopFilters.max || getPrecioMax ();
    updateShopFilters({ 'min': Number(min.value), 'max': Number(max.value) })
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
   if (shopFilters.min != event.target.value) {
        updateShopFilters({ 'min': Number(event.target.value) });
        filterAndSort()
   }
});

maxInput.addEventListener('change', (event) => {
    validarInput(event.target, validacionMax, getPrecioMax());
    if (shopFilters.max != event.target.value) {
        updateShopFilters({ 'max': Number(event.target.value) });
        filterAndSort()
   }
});

// ------------------------------ Aux ------------------------------
// precio mas alto entre los productos de la tienda
const getPrecioMax = () => {
    let maxPrice = 0;
    for (let item of arrangedItems)
    if (maxPrice < item.price) maxPrice = item.price;
    return Math.ceil(maxPrice)
}

const getTipoInput = input => input.classList[0].slice(-3);

const validacionMin = min => min >= 0 && min <= parseInt(maxInput.value); 
const validacionMax = max => max > 0 && max >= parseInt(minInput.value);
// ------------------------------ Filter ------------------------------
export const filterItemsByRange = (list, min, max) => list.filter(item => min < item.price && item.price < max);
//--------------------------------------------------------------------
