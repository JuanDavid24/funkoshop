const paginationLinksDOM = document.getElementsByClassName('pagination__link');
const prevDOM = paginationLinksDOM.prev;
const nextDOM = paginationLinksDOM.next;
const params = new URLSearchParams(querystring)


const limit = 6; let page = 2; let offset = limit*(page-1);
const productsToDisplay = products.slice(offset, offset + limit);
itemsContainerDOM.innerHTML = ""
renderItems(productsToDisplay, itemsContainerDOM)