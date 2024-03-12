import { paginate, currentPage, createPaginationLinks } from "./pagination.js";
const searchInputDOM = document.querySelector('.filter__search > input');
const itemsContainerDOM = document.querySelector('.shop-items');
const orderByDOM = document.querySelector('.filter__order > select');
const paginationDOM = document.querySelector('.pagination');
let arrangedItems = JSON.parse(sessionStorage.getItem('arrangedItems')) || products;
let shopFilters = JSON.parse(sessionStorage.getItem('shopFilters')) || {};

// event listener select ordenar
orderByDOM.addEventListener('change', event => {
    //paramsURL.set('orderby', event.target.value);
    //window.history.replaceState({}, '', `${window.location.pathname}?${paramsURL}`)

    arrangedItems = sortItems(arrangedItems, event.target.value);

    sessionStorage.setItem('arrangedItems', JSON.stringify(arrangedItems));
    shopFilters.orderBy = event.target.value;
    sessionStorage.setItem('shopFilters', JSON.stringify(shopFilters));
    
    const pageOfItems = paginate(arrangedItems, currentPage, 6)
    renderItems( pageOfItems, itemsContainerDOM );
});

// recibe criterio de ordenamiento y devuelve la lista ordenada
const sortItems = (itemList, sortValue) => {
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

// muestra items en un contenedor del DOM
export const renderItems = (itemList, containerDOM, clear=true) => {
    if (clear) containerDOM.innerHTML = '';
    itemList.forEach(item => { 
        containerDOM.innerHTML +=
        `<li class="shop-item">
            <article class="card-item">
                <a class="card-item__list" href="/shop/item/ ${item.product_id}">
                <picture class="card-item__cover">
                    <img class="card-item__img--front" src="${item.image_front}" alt="imagen figura ${item.product_name} - front">
                    <img class="card-item__img--back" src="${item.image_back}" alt="imagen figura ${item.product_name} - box">
                </picture>
                <div class="card-item__content">
                    <p class="card-item__licence"> ${item.licence_name.toUpperCase()}</p>
                    <h4 class="card-item__title"> ${item.product_name.toUpperCase()}</h4>
                    <p class="card-item__price"> ${item.price}</p>
                    ${(item.dues > 0) ? 
                        `<p class="card-item__promo">${item.dues} CUOTAS SIN INTERÉS</p>`
                        : "" } 
                </div>
                </a>
            </article>
        </li>`
    })
};         

// event listener input busqueda
searchInputDOM.addEventListener('change', (event) => {
    const searchTerm = event.target.value;
    const searchResult = joinResults (searchItems(products, searchTerm, "product_name"),
                                searchItems(products, searchTerm, "licence_name"));
    const sortedItems = sortItems(searchResult, orderByDOM.value);

    sessionStorage.setItem("arrangedItems", JSON.stringify(sortedItems));
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

function nextPage(element) {
    console.log("element");
    paginate(arrangedItems, currentPage+1, 6)
} 

window.onload = () => {
    if (shopFilters.search) searchInputDOM.value = shopFilters.search;
    if (shopFilters.orderBy) orderByDOM.value = shopFilters.orderBy;
    const pageOfItems = paginate(arrangedItems, currentPage, 6);
    renderItems(pageOfItems, itemsContainerDOM);
    createPaginationLinks(paginationDOM, arrangedItems.length, currentPage, 6)
}