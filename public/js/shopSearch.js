import { searchInputDOM, updateArrangedItems, shopFilters } from "./shop.js";
import { sortItems, orderByDOM } from "./shopOrdering.js";

// event listener input busqueda
searchInputDOM.addEventListener('change', (event) => {
    const searchTerm = event.target.value;
    const searchResult = joinResults (searchItems(products, searchTerm, "product_name"),
                                searchItems(products, searchTerm, "licence_name"));
    const sortedItems = sortItems(searchResult, orderByDOM.value);
    updateArrangedItems(sortedItems);

    shopFilters.search = event.target.value;
    sessionStorage.setItem('shopFilters', JSON.stringify(shopFilters));

    window.location.href = "/shop?page=1"; //vuelvo a pagina 1
});

// busca items de la lista de productos por una propiedad en específico
const searchItems = (list, searchInput, field) => 
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