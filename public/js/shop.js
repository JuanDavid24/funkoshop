const searchInputDOM = document.querySelector('.filter__search > input');
itemsContainerDOM = document.querySelector('.shop-items');
const orderByDOM = document.querySelector('.filter__order > select');

orderByDOM.addEventListener('change', event => {

    const sortList = {
        'alph': () => orderItems(products, "product_name"),
        'priceAsc': () => orderItems(products, "price"),
        'priceDes': () => orderItems(products, "price", true)
    };
    //console.log(event.target.value);
    sortList[event.target.value]();
    itemsContainerDOM.innerHTML = ''
    renderItems(products, itemsContainerDOM);
});

const orderItems = (list, propName, reverse=false) => {
    propName === 'price' ? 
        list.sort((a, b) => Number(a[propName]) - Number(b[propName])) :
        list.sort( (a, b) => a[propName].localeCompare(b[propName]))
    if (reverse) list.reverse();
}

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
           
        
// Filtros
searchInputDOM.addEventListener('change', (event) => {
let result = searchItems(event.target.value, "product_name");
let result2 = searchItems(event.target.value, "licence_name");
result = joinResults(result, result2)
itemsContainerDOM.innerHTML = '';
renderItems(result, itemsContainerDOM)
});

const searchItems = (searchInput, field) => {
    return products.filter( prod => prod[field].toLowerCase()
    .includes(searchInput.toLowerCase()) );
}

const joinResults = (resultA, resultB) => {
    resultB.forEach(item => {
        if (resultA.indexOf(item) === -1) resultA.push(item)
    }); 
    return resultA;
}

orderItems(products, "product_name");
renderItems(products, itemsContainerDOM)