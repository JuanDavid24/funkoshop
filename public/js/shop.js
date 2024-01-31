const searchInputDOM = document.querySelector('.filter__search > input');
const itemsContainerDOM = document.querySelector('.shop-items');
const orderByDOM = document.querySelector('.filter__order > select');
let filterResult = '';

// event listener select ordenar
orderByDOM.addEventListener('change', event => {
    const productsToDisplay = sortItems(event.target.value);
    itemsContainerDOM.innerHTML = ''
    renderItems(productsToDisplay, itemsContainerDOM);
});

// recibe criterio de ordenamiento y devuelve la lista ordenada
const sortItems = (sortValue) => {
    const productsToDisplay = filterResult ? filterResult : products;
    const sortList = {
        'alph': () => sortItemsByPropName(productsToDisplay, "product_name"),
        'priceAsc': () => sortItemsByPropName(productsToDisplay, "price"),
        'priceDes': () => sortItemsByPropName(productsToDisplay, "price", true)
    };
    sortList[sortValue]();
    return productsToDisplay
}

// ordena items de una lista por una propiedad dada
const sortItemsByPropName = (list, propName, reverse=false) => {
    propName === 'price' ? 
        list.sort((a, b) => Number(a[propName]) - Number(b[propName])) :
        list.sort( (a, b) => a[propName].localeCompare(b[propName]))
    if (reverse) list.reverse();
}

// muestra items en un contenedor del DOM
const renderItems = (itemList, containerDOM) => {
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
filterResult = joinResults (searchItems(products, event.target.value, "product_name"),
                            searchItems(products, event.target.value, "licence_name"));
itemsContainerDOM.innerHTML = '';
const productsToDisplay = sortItems(orderByDOM.value)
renderItems(productsToDisplay, itemsContainerDOM)
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

sortItemsByPropName(products, "product_name");
renderItems(products, itemsContainerDOM)