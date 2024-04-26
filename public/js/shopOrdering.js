import { arrangedItems, updateShopFilters, updateArrangedItems } from "./shop.js";
export const orderByDOM = document.querySelector('.filter__order > select');


// event listener select ordenar
orderByDOM.addEventListener('change', event => {
    updateShopFilters({'orderBy': event.target.value});
    updateArrangedItems( sortItems(arrangedItems, event.target.value) );
    window.location.href = "/shop?page=1"; //vuelvo a pagina 1
});

// recibe criterio de ordenamiento y devuelve la lista ordenada
export const sortItems = (itemList, sortValue) => {
    const sortList = {
        'alph': () => sortItemsByPropName(itemList, "product_name"),
        'priceAsc': () => sortItemsByPropName(itemList, "price"),
        'priceDes': () => sortItemsByPropName(itemList, "price", true)
    };
    sortList[sortValue]();
    return itemList
}

// ordena items de una lista por una propiedad dada
const sortItemsByPropName = (list, propName, reverse=false) => {
    propName === 'price' ? 
        list.sort((a, b) => Number(a[propName]) - Number(b[propName])) :
        list.sort( (a, b) => a[propName].localeCompare(b[propName]))
    if (reverse) list.reverse();
}