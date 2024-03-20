import { paginate, currentPage, createPaginationLinks } from "./pagination.js";
import { orderByDOM, sortItems } from "./shopOrdering.js";
export let arrangedItems = JSON.parse(sessionStorage.getItem('arrangedItems')) || products;
export let shopFilters = JSON.parse(sessionStorage.getItem('shopFilters')) || {};
export const searchInputDOM = document.querySelector('.filter__search > input');
export const itemsContainerDOM = document.querySelector('.shop-items');
const paginationDOM = document.querySelector('.pagination');

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

// actualiza lista de items ( prev filtrada y ordenada) a mostrar
export const updateArrangedItems = (newValue) => {
    arrangedItems = newValue;
    sessionStorage.setItem('arrangedItems', JSON.stringify(arrangedItems));
}

window.onload = () => {
    if (shopFilters.search) searchInputDOM.value = shopFilters.search;
    if (shopFilters.orderBy) orderByDOM.value = shopFilters.orderBy;
    const pageOfItems = paginate(arrangedItems, currentPage, 6);
    renderItems(pageOfItems, itemsContainerDOM);
    createPaginationLinks(paginationDOM, arrangedItems.length, currentPage, 6)
}