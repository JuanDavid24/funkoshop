import { updateShopFilters, filterAndSort } from "./shop.js";

export const searchInputDOM = document.querySelector('.filter__search > input');

// event listener input busqueda
searchInputDOM.addEventListener('change', (event) => {
    updateShopFilters({"search": event.target.value});
    filterAndSort()
});

// busca items en lista de items por varios campos
export const searchItems = (list, searchTerm) => 
    joinResults (searchItemsByField(list, searchTerm, "product_name"),
                 searchItemsByField(list, searchTerm, "licence_name"));

// busca items de la lista de productos por una propiedad en específico
const searchItemsByField = (list, searchInput, field) => 
    list.filter( element => normalizeStr(element[field]).includes(normalizeStr(searchInput)) );

// quita diacríticos y pasa a minuscula un string
const normalizeStr = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();

// une dos arrays, sin repetir elementos
const joinResults = (arrayA, arrayB) => {
    arrayB.forEach(element => {
        if (arrayA.indexOf(element) === -1) arrayA.push(element)
    }); 
    return arrayA;
}